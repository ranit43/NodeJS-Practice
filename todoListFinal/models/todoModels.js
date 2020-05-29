var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todoName: String,
  isDone: Boolean,
});

//change this name parameter to decide to insert in which document
var TodoModel = mongoose.model("Todos", todoSchema);

module.exports = TodoModel;
