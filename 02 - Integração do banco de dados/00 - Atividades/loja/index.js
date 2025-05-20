import mysql from 'mysql2'

//criar conexão
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja',
    port: '3306'
});

function inserir() {
    const values = [['café', 20.99, 30], ['computador', 1999.99, 2], ['arroz', 200.76, 50], ['água', 8.49, 50]]
    const query = `INSERT INTO produtos(nome, preco, estoque) VALUES ? `
    conectar(query, values)
}
function selecionar() {
    const query = 'SELECT * FROM produtos'
    conectar(query)
}
function atualizar(novoValor,condicao) {
    const query = `UPDATE produtos SET ${novoValor} WHERE ${condicao}`
    conectar(query)
}
function deletar(tabela, condicao) {
    const query =`DELETE FROM ${tabela} WHERE ${condicao}`
    conectar(query)
}

// conectar com o banco
function conectar(query, values) {
    connection.connect(err => {
        if (err) {
            console.error('Erro ao conectar ao MySQL', err);
            return;
        }
        console.log('----------CONECTADO AO BANCO----------')

        // realizar a consulta
        connection.query(query, [values], (err, results) => {
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
}

deletar()
