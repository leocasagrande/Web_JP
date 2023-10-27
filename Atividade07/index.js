const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){
    
    res.render('index.html', { error: '' });

});

app.post('/dados', function(req,res){

    const { nome, cpf, dta, telefone, endereco, cep, email, especialidade, alergia, info } = req.body;

    let error = '';

    if (!nome) {
    error = 'Campo Nome não pode ser vazio.';
    } else if (!cpf) {
        error = 'Campo CPF não pode ser vazio.';
    } else if (!dta) {
        error = 'Campo Data de Nascimento não pode ser vazio.';
    } else if (!telefone) {
        error = 'Campo Telefone não pode ser vazio.';
    } else if (!endereco) {
        error = 'Campo Endereço não pode ser vazio.';
    } else if (!cep) {
        error = 'Campo CEP não pode ser vazio.';
    } else if (!email) {
        error = 'Campo E-mail não pode ser vazio.';
    } else if (!especialidade) {
    error = 'Você deve selecionar uma especialidade.';
    }

    if (error) {
    res.render('index.html', { error });
    } else {
    res.render('dados.html', { nome, cpf, dta, telefone, endereco, cep, email, especialidade, alergia, info });
    }
});

const PORT = 8080;

app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});
