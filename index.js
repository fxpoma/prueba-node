const express = require('express');

const app = express();

app.get('/',(req,res)=> res.send('<h1>Babas en express</h1>'))

console.log("Esto solo es una baba");

app.listen(8080);
console.log('Server on port 8080')