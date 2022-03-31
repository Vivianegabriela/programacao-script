module.exports = {
    index
}

function index(req, res) {
    res.render('index-unico.ejs', {
        title: 'Re-fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Principal',
        autor: '5º ADS - Programação Script - Matutino'
    })

}