/**
 * Created by kiran on 2/27/2016.
 */
var Sequelize = require('sequelize');
var sequelize= new Sequelize(undefined,undefined,undefined,{
   'dialect': 'sqlite',
    'storage': './data/dev-todo-api.sqlite'
});

var db ={};

db.todos = sequelize.import("./models/todo.js");
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports=db;