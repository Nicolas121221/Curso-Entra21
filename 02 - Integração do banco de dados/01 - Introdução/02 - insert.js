import mysql from 'mysql2'
const insert = "INSERT INTO cupons(forma_pagamento_id,valor) values ?"
const values = [[1,20],[2,50],[4,40]]

//criar conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mercado',
    port: '3306'
});

// conectar com o banco
connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL', err);
        return;
    }
    console.log('----------CONECTADO AO BANCO----------')

    // realizar a consulta
    connection.query(insert, [values], (err, results) => {
        if (err) {
            console.error('Erro ao executar consulta', err);
            return;
        }
        console.log(results)

        //fechar conexão
        connection.end(err => {
            if (err) {
                console.error('Erro ao fechar conexão');
            }
            else {
                console.log('CONEXÃO FECHADA !!!')
            }
        })
    })
})