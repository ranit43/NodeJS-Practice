var Todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todo/:uname', function (req, res) {
        Todos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;
            else {
                res.send(todos);
            }
        });
    });

    app.get('/api/todos/:id', function (req, res) {
        Todos.findById({ _id: req.params.id }, function (err, itemTodo) {
            if (err) {
                throw err;
            }
            else {
                res.send(itemTodo);
            }
        });
    });

    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todos.findByIdAndUpdate({ _id: req.body.id }, { todoName: req.body.todoName, isDone: req.body.isDone }, function (err, data) {
                if (err) {
                    throw err;
                }
                else {
                    res.send('Item updated Successfully\n\n' + data);
                }
            });
        }
        else {
            var nTodo = Todos({
                todoName: req.body.todoName,
                isDone: req.body.isDone,
                username: req.body.username
            });

            nTodo.save(function (err, data) {
                if (err) {
                    throw err;
                }
                else {
                    res.send('Todo Saved Successfully\n\n' + data);
                }
            })
        }
    })

    app.delete('/api/todo', function (req, res) {
        Todos.findByIdAndDelete({ _id: req.body.id }, function (err, data) {
            res.send('Data Deleted Successfully\n\n' + data);
        })
    })



}