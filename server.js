var express = require('express');
var app = express();

var path = require('path');

var port = process.env.PORT || 3500;


app.get('/', function(req, res){
    
    var fileName = path.join(__dirname, 'index.html');
    
    res.sendFile(fileName, function(err){
        if(err){
            console.error(err)
        }else{
            console.log('Home page')
        }
    })
    
})



app.listen(port, function(){
    
    console.log('Listening to port ' + port)
})