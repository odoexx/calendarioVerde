var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hola Mundo');
});

app.listen(5500, function(){
    console.log('Aplicacion ejemplo, escuchando puerto 5500');
});