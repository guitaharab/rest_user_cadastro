module.exports = function(uri){
    let mongoose = require('mongoose');
    
    mongoose.connect('mongodb://localhost/db');
    
    mongoose.connection.on('connected', function(){
        console.log("Conexão criada");
    });
    
    mongoose.connection.on('disconnected', function(){
        console.log("disconectado do banco db");
    });

    mongoose.connection.on('error', function(err){
        console.log(err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Aplicação terminada, conexão fechada')
            process.exit(0);
        });

    });
    
};
