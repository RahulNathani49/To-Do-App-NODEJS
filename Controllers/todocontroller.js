var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data = new Array();
module.exports = function(app) {
    // GET
    app.get('/todo', function(req, res) {
        res.render('todo', { todos: data });
    });
    // POST
    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.render('todo', { todos: data });
    });

    // DELETE
    app.delete('/todo', function(req, res) {

    });
};