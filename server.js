var http = require('http'),
    app = require('./config/express');


var port = process.env.PORT || 3000;
http.createServer(app).listen(port, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});
