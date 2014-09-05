var init = function (app) {
    app.get('/hello', function(req, res) {
        console.log(req);
        res.render('hello.ejs', {prenom: req.query.prenom});
    });
    app.get('/*', function(req, res) {
        res.end();
    });
}


exports.init = init;