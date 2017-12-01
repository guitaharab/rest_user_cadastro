module.exports = function(app){

    var api = app.api.users;

    app.route('/api/users')
        .get(api.list)
        .post(api.insert);

    app.route('/api/users/:id')
        .get(api.findId)
        .put(api.update)
        .delete(api.remove);
}


