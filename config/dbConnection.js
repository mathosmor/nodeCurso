var mysql = require('mysql');

var connMySQL = () =>{
    console.log('Conectado ao Banco de Dados.')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'db_noticias'
    }); 
}

module.exports = () => {
    console.log("O autoload carregou o módulo de conexão com o db")
    return connMySQL;
}