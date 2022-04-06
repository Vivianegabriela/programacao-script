const http = require('http')
const server = require('./config/server.js')

http.createServer(server).listen(server.get('port'), function () {
    console.log('Server running on port ' + server.get('port'))
    console.log(`http://localhost:${server.get('port')}`);
})