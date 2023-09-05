const calc = require('.calculadora');
const express = require('express');
const app = express();

app.get(hello, function(req,res){
    res.send(Olá);
});

app.get(somarab, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`);
});


const port = 8080;

app.listen(port,function(){
    console.log(app+port);
});

app.get(subtrairab, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.subtrair(a,b)}`);
});

app.get(multiplicarab, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.multiplicar(a,b)}`);
});

app.get(dividirab, function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b} = ${calc.dividir(a,b)}`);
});