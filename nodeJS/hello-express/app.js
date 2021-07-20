const express = require('express');
const app = express();

// console.log("Bye World");

// http://localhost;3000/hello

app.get('/hello', function(req,res){
    res.send("hello world!")
})

app.listen(3000, function(){
    console.log("Server is running on Port 3000");
})