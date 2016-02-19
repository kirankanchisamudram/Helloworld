/**
 * Created by kiran on 2/19/2016.
 */
var express = require('express');
var app= express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){

    res.send('To do Api root');
});

app.listen(PORT,function(){
    console.log('Express listening on port'+PORT);
});

