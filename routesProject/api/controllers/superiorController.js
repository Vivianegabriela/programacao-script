module.exports = {
    menuSuperiorController,
    menuSuperiorEnsinosController,
    menuSuperiorFatecController,
    menuSuperiorFatecNoturnoController,
    menuFatecADSController
}

function menuSuperiorController(req, res) {
    res.render('superior/frm_superiorMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Ensino Superior',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })

}

function menuSuperiorEnsinosController(req, res) {
    res.render('superior/frm_superiorEnsinosMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Ensinos Superiores',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })
    
}

function menuSuperiorFatecController(req, res) {
    res.render('superior/ensinos/frm_fatecMenu.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Menu Fatec',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })
}

function menuSuperiorFatecNoturnoController(req, res) {
    res.render('superior/ensinos/frm_fatecMenuNoturno.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'Fatec - Noturno',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })
}

function menuFatecADSController(req, res) {
    res.render('superior/ensinos/frm_fatecMenuNoturnoADS.ejs', {
        title: 'Re-Fatorando',
        mensagem: 'NodeJS - Express FrameWork',
        titulo: 'ADS - Noturno',
        autor: 'Túlio Guaraldo - 5º ADS Noturno'
    })
}