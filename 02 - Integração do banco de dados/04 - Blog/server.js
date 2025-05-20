import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'
import express, { query } from 'express'
import slugify from 'slugify'
import bcrypt from 'bcryptjs'

// Carregar dados do .env
dotenv.config();

// Criar aplicativo express
const app = express();
app.use(express.json());
app.use(cors());
const port = 3301;

// Criar conexão
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
})

connection.connect((error) => {
    if (error) {
        console.log('Erro ao conectar ao Banco.', error)
    }
    else {
        console.log('Conectado com Sucessso!')
    }
})


// * Rotas de seleção dos contéudos das tabelas
app.get('/categorias', (req, res) => {
    const query = 'SELECT categoria FROM categorias';
    connection.query(query, (error, result) => {
        if (error) {
            return res.status(404).json({ error: 'Não encontrado' })
        }
        return res.status(200).json({ categorias: result })
    })
});

app.get('/regioes', (req, res) => {
    const query = 'SELECT regiao FROM regioes';
    connection.query(query, (error, result) => {
        if (error) {
            return res.status(404).json({ error: 'Não encontrado' })
        }
        return res.status(200).json({ regiao: result })
    })
});

// * Rotas de Criação de contéudos das tabelas
app.post('/cadastrar/categorias', (req, res) => {
    const { categoria } = req.body;
    const slug = slugify(categoria, { lower: true, strict: true });

    const query = 'INSERT INTO categorias (categoria,slug) VALUES (?,?)';
    connection.query(query, [categoria, slug], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        return res.status(201).json({ message: 'Inserido com sucesso', id: result.insertId })
    })
});

app.post('/cadastrar/regioes', (req, res) => {
    const { regiao } = req.body;
    const slug = slugify(regiao, { lower: true, strict: true });

    const query = 'INSERT INTO regioes (regiao,slug) VALUES (?,?)';
    connection.query(query, [regiao, slug], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        return res.status(201).json({ message: 'Inserido com sucesso', id: result.insertId })
    })
});

app.post('/cadastrar/usuario', async (req, res) => {
    const { usuario, senha, nome, data_nascimento } = req.body;
    try {
        const salt = await bcrypt.genSalt()
        const senhaCriptografada = await bcrypt.hash(senha, salt)

        const query = 'INSERT INTO usuarios (usuario, senha , nome , data_criacao, data_nascimento) VALUES (?,?,?,NOW(),?)'
        connection.query(query, [usuario, senhaCriptografada, nome, data_nascimento], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error, message: 'Erro ao inserir o usuario' })
            }
            return res.status(201).json({ message: 'Cadastrado com sucesso', id: result.insertId })
        })
    }
    catch (error) {
        res.status(500).json({ error: error, message: 'Erro ao processar a senha' })
    }
});

app.post('/cadastrar/autor', (req, res) => {
    const { usuario_id, biografia, imagem, links } = req.body;

    connection.query("select id from usuarios where id = ?", [usuario_id], (error, result) => {
        if (error) return res.status(500).json({ error: error, message: 'Erro ao procurar o usuario' })
        if (result.length === 0) return res.status(401).json({ message: 'Usuário não encontrado', id: result.insertId })

        const query = "INSERT INTO autores(usuario_id,biografia,imagem,links) VALUES (?,?,?,?)";
        connection.query(query, [usuario_id, biografia, imagem, links], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error, message: 'Erro ao inserir o autor' })
            }
            return res.status(201).json({ message: 'Cadastrado com sucesso', id: result.insertId })
        })
    })
});

app.post('/criar/postagem', (req, res) => {
    const { titulo, conteudo, autor_id, imagem_capa, categoria_id, regiao_id, ativo } = req.body;

    connection.query("select id from autores where id = ?", [autor_id], (error, result) => {
        if (error) return res.status(500).json({ error: error, message: 'Erro ao procurar o usuario' })
        if (result.length === 0) return res.status(401).json({ message: 'Usuário não encontrado', id: result.id })

        const query = "INSERT INTO postagens(titulo,conteudo,autor_id,imagem_capa,postado_em,categoria_id,regiao_id,ativo) VALUES (?,?,?,?,curdate(),?,?,?)";
        connection.query(query, [titulo, conteudo, autor_id, imagem_capa, categoria_id, regiao_id, ativo], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error, message: 'Erro ao criar a postagem' })
            }
            return res.status(201).json({ message: 'Postagem criada com sucesso', id: result.insertId })
        })
    })
});

app.post('/criar/comentario', (req, res) => {
    const { comentario, usuario_id, postagem_id, ativo } = req.body;

    connection.query("select id from usuarios where id = ?", [usuario_id], (error, result) => {
        if (error) return res.status(500).json({ error: error, message: 'Erro ao procurar o usuario' })
        if (result.length === 0) return res.status(401).json({ message: 'Usuário não encontrado', id: result.id })

        const query = "INSERT INTO comentarios(comentario,usuario_id,postado_em,postagem_id,ativo) VALUES (?,?,curdate(),?,?)";
        connection.query(query, [comentario, usuario_id, postagem_id, ativo], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error, message: 'Erro ao criar o comentário' })
            }
            return res.status(201).json({ message: 'comentário criado com sucesso', id: result.insertId })
        })
    })
});

// * Rotas de atualização do conteúdo das tabelas
app.put("/atualizar/categoria/:id", (req, res) => {
    const  id  = req.params.id;
    const { categoria } = req.body;
    const slug = slugify(categoria, { lower: true, strict: true });

    const query = 'update categorias set categoria = ?, slug = ? where id = ?';
    connection.query(query, [categoria, slug, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Categoria não encontrada' })
        };

        return res.status(200).json({ message: 'atualizado com sucesso', id: id })
    })
});

app.put("/atualizar/regioes/:id", (req, res) => {
    const  id  = req.params.id;
    const { regiao } = req.body;
    const slug = slugify(regiao, { lower: true, strict: true });

    const query = 'update regioes set regiao = ?, slug = ? where id = ?';
    connection.query(query, [regiao, slug, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Região não encontrada' })
        };

        return res.status(200).json({ message: 'atualizado com sucesso', id: id })
    })
});

app.put("/atualizar/usuarios/:id", async (req, res) => {
    try {
        const  id  = req.params.id;
        const {  usuario, senha, nome, data_nascimento } = req.body;

        const salt = await bcrypt.genSalt()
        const senhaCriptografada = await bcrypt.hash(senha, salt)

        const query = 'update usuarios set usuario = ?, senha = ?, nome = ?, data_nascimento = ? where id = ?'
        connection.query(query, [usuario, senhaCriptografada, nome, data_nascimento, id ], (error, result) => {
            if (error) {
                return res.status(500).json({ error: error, message: 'Erro ao inserir o usuario' })
            }
            return res.status(201).json({ message: 'Usuário atualizado com sucesso', id: id })
        })
    }
    catch(error) {
        res.status(500).json({ error: error, message: 'Erro ao processar a senha' })
    }
});

app.put("/atualizar/autores/:id", (req, res) => {
    const  id  = req.params.id;
    const { usuario_id, biografia, imagem, links } = req.body;

    const query = 'update autores set usuario_id = ?, biografia = ?, imagem = ?, links = ? where id = ?';
    connection.query(query, [usuario_id, biografia, imagem, links, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Autor não encontrada' })
        };

        return res.status(200).json({ message: 'Autor atualizado com sucesso', id: id })
    })
});

app.put("/atualizar/postagem/:id", (req, res) => {
    const  id  = req.params.id;
    const { titulo, conteudo, autor_id, imagem_capa, categoria_id, regiao_id  } = req.body;

    const query = 'update postagens set titulo = ?, conteudo = ?, autor_id = ?, imagem_capa = ?, categoria_id = ?, regiao_id = ? where id = ?';
    connection.query(query, [titulo, conteudo, autor_id, imagem_capa, categoria_id, regiao_id , id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Postagem não encontrada' })
        };

        return res.status(200).json({ message: 'Postagem atualizado com sucesso', id: id })
    })
});

app.put("/atualizar/comentario/:id", (req, res) => {
    const  id  = req.params.id;
    const { comentario, usuario_id, postagem_id  } = req.body;

    const query = 'update comentarios set comentario = ?, usuario_id = ?, postagem_id = ? where id = ?';
    connection.query(query, [comentario, usuario_id, postagem_id, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comentário não encontrada' })
        };

        return res.status(200).json({ message: 'Comentário atualizado com sucesso', id: id })
    })
});

// * Seção de alterar os Status dos comentários e das publicações
app.put("/status/postagem/:id", (req, res) => {
    const  id  = req.params.id;
    const { ativo } = req.body;

    const query = 'update postagens set ativo = ? where id = ?';
    connection.query(query, [ativo, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comentário não encontrada' })
        };

        return res.status(200).json({ message: 'Publicação atualizado com sucesso', id: id })
    })
});

app.put("/status/comentario/:id", (req, res) => {
    const  id  = req.params.id;
    const { ativo } = req.body;

    const query = 'update comentarios set ativo = ? where id = ?';
    connection.query(query, [ativo, id], (error, result) => {
        if (error) {
            return res.status(500).json({ error: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comentário não encontrada' })
        };

        return res.status(200).json({ message: 'Comentário atualizado com sucesso', id: id })
    })
});

app.listen(port, () => {
    console.log('Servidor Rodando.');
    console.log(`http://localhost:${port}`)
});