module.exports = {
    menuClassificadosControllers,
    menuAutomoveisControllers,
    menuVolkswagenControllers
}

function menuClassificadosControllers(req, res) {
    res.render('classificados/frm_classificadosMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu - Classificados',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}

function menuAutomoveisControllers(req, res) {
    res.render('classificados/frm_AutomoveisMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu - Automoveis',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}

function menuVolkswagenControllers(req, res) {
    res.render('classificados/frm_VolkswagenMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu - Volkswagen',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}