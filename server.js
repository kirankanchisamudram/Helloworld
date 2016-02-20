/**
 * Created by kiran on 2/19/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');

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
    var matchedTodo;
todos.forEach(function(todo){
    if(todoId === todo.id){
        matchedTodo = todo;
    }
    });
    if(matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }

});


app.post('/todos/',function(req,res){
var body = req.body;
    body.id= todoNextId++;
    todos.push(body);
    res.json(todos);
});

app.listen(PORT,function(){
    console.log('Express listening on port'+PORT);
});

