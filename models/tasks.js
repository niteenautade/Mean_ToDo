// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var taskSchema = new Schema({  
    id: String,
    email: String,
    task: String,
    done: String
});

// the schema is useless so far
// we need to create a model using it
var Task = mongoose.model('tasks', taskSchema);

// make this available to our users in our Node applications
module.exports = Task;
module.exports.addTask = function(task,callback){
  Task.create(task,callback);
}