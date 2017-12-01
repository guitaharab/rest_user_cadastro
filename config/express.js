let express = require('express');
let bodyParser = require('body-parser');
let consign =  require('consign');


module.exports = function(app){

    var app = express();

    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({ extended: false })); 
    app.use(bodyParser.json());

    consign({cwd:'app'})
        .include('models')
        .then('api')
        .then('routes')
        .into(app);

    console.log('carregando as configurações do express');
    return app;
}