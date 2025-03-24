import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'
import express, { query } from 'express'

// Carregar dados do .env
dotenv.config();

// Criar aplicativo express
const app = express();
app.use(express.json());
app.use(cors());
const port = 3303;

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

app.get('/categorias', (req, res) => {
    let query = 'SELECT categoria FROM categorias';
    connection.query(query, (error, result) => {
        if (error) {
            return res.status(404).json({ error: 'Não encontrado' })
        }
        return res.status(200).json({ categorias: result })
    })
})

app.get('/regioes', (req, res) => {
    let query = 'SELECT regiao FROM regioes';
    connection.query(query, (error, result) => {
        if (error) {
            return res.status(404).json({ error: 'Não encontrado' })
        }
        return res.status(200).json({ categorias: result })
    })
})

app.listen(port, () => {
    console.log('Servidor Rodando.');
    console.log(`http://localhost:${port}`)
})