module.exports = {
    index
}

function index(req, res) {
    res.render('index.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Principal',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}