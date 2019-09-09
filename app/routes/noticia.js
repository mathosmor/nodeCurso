module.exports = (app) => {

    app.get('/noticia', (req, res) => {

        var connection = app.config.dbConnection();

        connection.query('select * from noticias where id_noticias = 2', (error, result) => {
            if(error) {
                res.send(error)
            }
            res.render("noticias/noticia", {noticia : result});
        });
    });
}