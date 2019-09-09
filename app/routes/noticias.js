var dbConnection = require('../../config/dbConnection')

module.exports = (app) => {

    
    app.get('/noticias' , (req, res) =>{
        var connection = app.config.dbConnection();
        
        connection.query('select * from noticias',(error, result) =>{
            if(error) {
                res.send(error)
            }
            res.render("noticias/noticias", {noticias: result});
        });
    });
};

//O parâmetro app é passado no require rotaNoticias "rotaNoticias(app);" do app.js para ele receber nesse arquivo e
//saber o que tem que ser feito, aí então ele retorna ao arq app.js após ser feito o que foi solicitado.
