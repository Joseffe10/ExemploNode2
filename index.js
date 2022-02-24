const express = require('express');
 
const app = express();
 
app.get('/home', (req, res) => {
    res.send('Olá Turma. Engenharia da Computação ESAMC!');
});
 
app.listen(3333);