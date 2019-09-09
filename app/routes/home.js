module.exports = (app) => {
    app.get('/' , (req, res) =>{
        res.render("home/index")
    });
};

//O parâmetro app é passado no require rotaHome "rotaHome(app);" do app.js para ele receber nesse arquivo e
//saber o que tem que ser feito, aí então ele retorna ao arq app.js após ser feito o que foi solicitado.