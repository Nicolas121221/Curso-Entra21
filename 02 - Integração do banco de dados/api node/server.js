import dotenv from 'dotenv'
import mysql from 'mysql2'
import cors from 'cors'
import express, { query, response } from 'express'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const port = 3303

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

app.get('/', (req, res) => {
    let query = 'SELECT * FROM cadastro'
    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.post('/cadastrar', (req, res) => {
    const { nome, cpf, altura, peso } = req.body;
    if (!nome || !cpf || !altura || !peso) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
    }
    let query = 'INSERT INTO cadastro(nome,cpf,altura,peso) VALUES(?,?,?,?)';
    let parameters = [nome, cpf, altura, peso]
    connection.query(query, parameters, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Erro ao cadastrar", details: error });
        }
        res.status(201).json({ message: "Aluno Cadastrado", id: result.insertId })
    })
})

app.put('/atualizar/:id', (req, res) => {
    const { nome, cpf, altura, peso } = req.body;
    const { id } = req.params;
    if (!nome || !cpf || !altura || !peso) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }
    let query = `UPDATE cadastro SET nome = ?, cpf = ?, altura = ?, peso = ? WHERE id = ?`
    let parameters = [nome, cpf, altura, peso, id];

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

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "informe o id" });
    }
    let query = "Delete From cadastro where id = ?"
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

app.listen(port, () => {
    console.log('Servidor rodando')
    console.log(`http://localhost:${port}`)
})
