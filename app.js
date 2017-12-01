let app = require('./config/express')();

let mongo = require('./config/db')('localhost/db');

app.listen(3000, function(req,res){
    console.log('servidor rodando na porta 3000');
});


