module.exports = (app) => {
    app.get('/formulario_inclusao_noticia' , (req, res) =>{
        res.render("admin/form_add_noticia")
    });
};

//O parâmetro app é passado no require rotaForm "rotaForm(app);" do app.js para ele receber nesse arquivo e
//saber o que tem que ser feito, aí então ele retorna ao arq app.js após ser feito o que foi solicitado.