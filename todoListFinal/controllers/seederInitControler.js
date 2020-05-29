var Todos = require("../models/todoModels");

module.exports = function (app) {
  app.get("/api/seedIniTodos", function (req, res) {
    var iniTodoList = [
      {
        username: "TDA",
        todoName: "Study",
        isDone: false,
      },
      {
        username: "TDA",
        todoName: "Play Fifa",
        isDone: true,
      },
      {
        username: "TDA",
        todoName: "Cook Food",
        isDone: false,
      },
      {
        username: "RDA",
        todoName: "Learn MERN",
        isDone: false,
      },
    ];

    Todos.create(iniTodoList, function (err, data) {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  });
};
