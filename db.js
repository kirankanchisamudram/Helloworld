/**
 * Created by kiran on 2/27/2016.
 */
var Sequelize = require('sequelize');
var env =process.env.NODE_ENV || "development";
var sequelize;
if(env === 'production'){
    sequelize = new Sequelize(process.env.DataBase_URL,{
        'dialect': 'postgres'
    })
}else
{
    sequelize= new Sequelize(undefined,undefined,undefined,{
        'dialect': 'sqlite',
        'storage': './data/dev-todo-api.sqlite'
    });
}
var db ={};

db.todos = sequelize.import("./models/todo.js");
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports=db;