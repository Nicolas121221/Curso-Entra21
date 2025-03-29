import mysql from 'mysql2'

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
    connection.query("DELETE FROM marcas WHERE nome_marca = 'Banco do brasil'", (err, results) => {
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