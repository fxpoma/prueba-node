const express = require('express');

const app = express();

console.log("La baba no debería estar aquí");

app.get('/',(req,res)=> res.send('<h1>Babas en express</h1>'))

console.log("Se supone que no debería ser así");

app.listen(8080);
console.log('Server on port 8080')