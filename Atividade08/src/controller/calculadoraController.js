const calculadora = require('../calculadora/calculadora');

function indexCalculadora(req, res){
    res.render('index.html');
};

function calcular(req, res){
    const { valor1, valor2, operacao } = req.body;
    let resultado;
  
    switch (operacao) {
      case "+":
        resultado = calculadora.somar(valor1, valor2);
        break;
      case "-":
        resultado = calculadora.subtrair(valor1, valor2);
        break;
      case "*":
        resultado = calculadora.multiplicar(valor1, valor2);
        break;
      case "/":
        resultado = calculadora.dividir(valor1, valor2);
        break;
    }
  
    res.render("resultado.html", { resultado });
};

module.exports = {
    indexCalculadora,
    calcular,
};
