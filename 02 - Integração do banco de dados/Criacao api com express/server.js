import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'
import express, { query } from 'express'

// Carregar dados do .env
dotenv.config()

// criar conexão com o mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Conectar ao banco de dados
connection.connect((error) => {
    if (error) {
        console.error('ERRO AO CONECTAR COM O BANCO DE DADOS', error)
    }
    else {
        console.log('CONECTADO AO BANCO DE DADOS')
    }
})

// Criar aplicativo com express
const app = express()
const port = 3303
app.use(express.json())
app.use(cors());

// Criando rota a partir da url definida 
// req - requisição - request
// res - reposta - response
//localhost:3303/
app.get('/', (req, res) => {
    let query = 'SELECT * FROM CEPS'
    connection.query(query, (error, result) => {
        if (error) {
            res.send(error)
        }
        else {
            res.send(result)
        }
    })
})

app.get('/cep/:cep', (req, res) => {
    let query = `SELECT * FROM CEPS WHERE CEP = "${req.params.cep}"`;
    connection.query(query, (error, result)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/uf/:estado', (req, res) => {
    let query = `SELECT * FROM CEPS WHERE ESTADO = "${req.params.estado}"`;
    connection.query(query, (error, result)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/insert/')

app.listen(port, () => {
    console.log('SERVIDOR ONLINE')
    console.log(`http://localhost:${port}`)
})



