const superiorController = require('../controllers/superiorController.js')

app.get('/superior/superiorMenu', superiorController.menuSuperiorController)

app.get('/superior/superiorEnsinoMenu', superiorController.menuSuperiorEnsinosController)

app.get('/superior/ensinos/fatecMenu', superiorController.menuSuperiorFatecController)

app.get('/superior/ensinos/fatecMenuNoturno', superiorController.menuSuperiorFatecNoturnoController)

app.get('/superior/ensinos/fatecNoturnoADS', superiorController.menuFatecADSController)