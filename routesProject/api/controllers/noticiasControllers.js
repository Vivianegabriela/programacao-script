module.exports = {
    menuNoticiasControllers,
    menuNoticiasEsportesControllers,
    menuNoticiasEsporteFutebolControllers
}

function menuNoticiasControllers(req, res) {
    res.render('noticias/frm_noticiasMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu de Notícias',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}

function menuNoticiasEsportesControllers(req, res) {
    res.render('noticias/frm_noticiasMenuEsporte.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Principal',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}

function menuNoticiasEsporteFutebolControllers(req, res) {
    res.render('noticias/frm_noticiasMenuEsporteFutebol.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Principal',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}