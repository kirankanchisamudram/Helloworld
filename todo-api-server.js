/**
 * Created by kiran on 2/19/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
var app= express();
var PORT = process.env.PORT || 3000;
var todoNextId=1;

app.use(bodyParser.json());
var todos=[{
    id:1,
    description:"attend a meeting by 3",
    completed:false
},
    {
        id:2,
        description:"go to market by 5PM",
        completed:false
    }];
app.get('/',function(req,res){

    res.send('To do Api root');
});
app.get('/todos',function(req,res){
    res.json(todos);
});

app.get('/todos/:id',function(req,res){
   var todoId= parseInt(req.params.id,10);
    var matchedTodo= _.findWhere(todos,{id:todoId});

    if(matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }

});


app.post('/todos/',function(req,res){
var body = _.pick(req.body,'description','completed');
console.log("todos post....");
// call create on db todo
    // respond with todo and 200
    // res.status(400) and json
    db.tobo.create(body).then(function(todo){
        console.log("post success");
res.json(todo.toJSON());
    },function(error){
        console.log(error);
res.status(400).json(error);
    });

});

app.delete('todos/:id',function(req,res){
    var todoId = parseInt(req.params.id,10);
    var matchedTodo = _.findWhere(todos,{id:todoId});

    if(!matchedTodo){
        res.status(404).Json({"error":"no to do found with the Id"});
    }
    else{

        todos = _.without(todos,matchedTodo);

        res.json(matchedTodo);
    }

});
app.put('todos/:id',function(req,res){

    var todoId = parseInt(req.params.id,10);
    var matchedTodo = _.findwhere(todos,{
        id:todoId
    });
    var body= _.pick(req.body,'description','completed');
    var validAttributes = {};
    if(!matchedTodo){
        return res.status(404).send();
    }
    if(body.hasOwnProperty('completed'&& _isBoolean(body.completed))){
        validAttributes.completed = body.completed;
    }else if(body.hasOwnProperty('completed')){
        return res.status(400).send();
    }
    if(body.hasOwnProperty('description'&& _.isString(body.description))){
        validAttributes.description = body.description;
    }else if(body.hasOwnProperty('description')){
        return res.status(400).send();
    }
    _.extend(matchedTodo,validAttributes);
   return res.JSON(matchedTodo);
});
db.sequelize.sync().then(function(){
    app.listen(PORT,function(){
        console.log('Express listening on port'+PORT);
    });
})

