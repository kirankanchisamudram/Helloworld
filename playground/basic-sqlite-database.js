/**
 * Created by kiran on 2/23/2016.
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined,undefined,undefined,{
    'dialect':'sqlite',
    'storage': '/basic-sqlite-database.sqlite'
});
var Todo = sequelize.define('todo',{
    description:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty:true,
            len:[1,250]

        }
    },
    completed :{
        type : Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false

    }
})
sequelize.sync({force: true})
    .then(function(){
console.log("Every thing is synced");
        Todo.create({
            description:'Sarted sqlite learning',
            completed:false
        }).then(function(todo){
            console.log('Finished!');
            console.log(todo);
        }).catch(function(error){
            console.log(error)
        });
});
