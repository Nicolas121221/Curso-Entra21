import dotenv from 'dotenv'
import mysql from 'mysql2'
import cors from 'cors'
import express, { query, response } from 'express'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const port = 3301

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar', error)
    }
    else {
        console.log('Conectado com sucesso!')
    }
})


app.post('/cadastrar/esferas', (req, res) => {
    const { numero, guardiao, status } = req.body;
    if (!numero || !guardiao || !status) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }
    let query = 'INSERT INTO esferas(numero, guardiao, status) VALUES (?,?,?)';
    let parameters = [numero, guardiao, status]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao cadastrar", details: error });
        }
        res.status(201).json({ message: "Esferas cadastradas", id: result.insertId })
    })
})

app.post('/cadastrar/capsula', (req, res) => {
    const { nome, criador, status } = req.body;
    if (!nome || !criador || !status) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }
    let query = 'INSERT INTO capsula(nome, criador, status) VALUES (?,?,?)';
    let parameters = [nome, criador, status]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao cadastrar", details: error });
        }
        res.status(201).json({ message: "capusulas cadastradas", id: result.insertId })
    })
})

app.post('/cadastrar/guerreiro', (req, res) => {
    const {id_capsula, id_esferas, nome, raça, poder, transformacao } = req.body;
    if ( !id_capsula || !id_esferas ||!nome || !raça || !poder || !transformacao) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    let query = 'INSERT INTO guerreiros_z (id_capsula, id_esferas, nome, raça, poder, transformacao) VALUES (?, ?, ?, ?, ?, ?)';
        let parameters = [ id_capsula, id_esferas, nome, raça, poder, transformacao]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao cadastrar", details: error });
        }
        res.status(201).json({ message: "guerreiro cadastrado", id: result.insertId });
    });
})

app.get('/', (req, res) => {
    let query = 'SELECT * FROM guerreiros_z'
    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/capsulas', (req, res) => {
    let query = 'SELECT * FROM capsulas'
    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/esferas', (req, res) => {
    let query = 'SELECT * FROM esferas'
    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/guerreiro/:id', (req, res) => {
    let { id } = req.params
    let query = 'SELECT * FROM guerreiros_z where id = (?)'
    let parameters = [id]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/esferas/:id', (req, res) => {
    let { id } = req.params
    let query = 'SELECT * FROM esferas where id = (?)'
    let parameters = [id]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/capsula/:id', (req, res) => {
    let { id } = req.params
    let query = 'SELECT * FROM capsula where id = (?)'
    let parameters = [id]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.delete('/deletar/guerreiro/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "informe o id" });
    }
    let query = "Delete From guerreiros_z where id = ?"
    let parameters = [id];
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao deletar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados deletados com Sucesso" })
    })
})

app.delete('/deletar/capsulas/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "informe o id" });
    }
    let query = "Delete From capsulas where id = ?"
    let parameters = [id];
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao deletar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados deletados com Sucesso" })
    })
})
app.delete('/deletar/esferas/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "informe o id" });
    }
    let query = "Delete From esferas where id = ?"
    let parameters = [id];
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao deletar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados deletados com Sucesso" })
    })
})

app.put('/atualizar/:id', (req, res) => {
    const {id_capsula, id_esferas, nome, raça, poder, transformacao } = req.body;
    const { id } = req.params;
    if (!id_capsula || !id_esferas ||!nome || !raça || !poder || !transformacao) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    let query = `UPDATE guerreiros_z SET id_capsula = ?, id_esferas = ?, nome = ?, raça = ?, poder = ?, transformacao = ?  WHERE id = ?`
    let parameters = [id_capsula, id_esferas, nome, raça, poder, transformacao, id ];

    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao atualizar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados atualizados com Sucesso" })
    })
})
app.put('/atualizar/esferas/:id', (req, res) => {
    const {numero, guardiao, status } = req.body;
    const { id } = req.params;
    if (!numero || !guardiao || !status) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    let query = `UPDATE esferas SET numero =?, guardiao = ?, status = ?  WHERE id = ?`
    let parameters = [numero, guardiao, status, id ];

    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao atualizar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados atualizados com Sucesso" })
    })
})
app.put('/atualizar/capsulas/:id', (req, res) => {
    const {nome,criador,status} = req.body;
    const { id } = req.params;
    if (!nome || !criador || !status) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    let query = `UPDATE capsula SET nome = ?,criador = ?,status = ?  WHERE id = ?`
    let parameters = [nome,criador,status,id ];

    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao atualizar", details: error })
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'ID não encontrado' })
        }
        res.status(200).json({ message: "Dados atualizados com Sucesso" })
    })
})

app.listen(port, () => {
    console.log('Servidor rodando')
    console.log(`http://localhost:${port}`)
})