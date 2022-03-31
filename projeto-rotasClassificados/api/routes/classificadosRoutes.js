const controllerClassificados = require('../controllers/classificadosControllers.js')

app.get('/classificados/classificadosMenu', controllerClassificados.menuClassificadosControllers)

app.get('/classificados/AutomoveisMenu', controllerClassificados.menuAutomoveisControllers)

app.get('/classificados/VolkswagenMenu', controllerClassificados.menuVolkswagenControllers)