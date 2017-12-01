var mongoose = require('mongoose');

module.exports = function(app){
    var api = {};

    var model = mongoose.model('Users');

    api.list = function(req,res){
        model
            .find()
            .then(user => res.json(user), 
                err =>{ 
                    console.log(err);
                    res.sendStatus(500);
                });
    }

    api.insert = function(req, res){
        model.create(req.body, function(err, user){
            if(err) console.log(err);
            res.json(user);
        });
    }

    api.remove = function(req, res){
        model.findByIdAndRemove(req.params.id, function(err, user){
            if(err) {
                console.log(err);
                res.sendStatus(500);
            }
            console.log("usuario removido com sucesso!");
            res.sendStatus(200);
        });
    }

    api.update = function(req, res){
        model.findByIdAndUpdate(req.params.id, req.body, function(err, user){
            if(err) console.log(err);
            console.log("atualização de usuário realizada com sucesso!")
            res.json(user);
        });
    }

    api.findId = function(req, res){
        model.findById(req.params.id,function(err,user){
            if(err) console.log(err);
            if(!user) throw new Error("usuario não encontrado.")
            else res.json(user);
        });
    }

    return api;
}

