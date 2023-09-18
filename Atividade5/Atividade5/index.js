const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(express.urlencoded());


app.get("/", function(req, res){
    res.render("index.html");
});


app.post("/dados", (req, res) => {
    const {nome, email, telefone, agendamento} = req.body;
    res.send(req.body);
    res.render("dados.html"); 
});


const PORT = 8080;
app.listen(PORT, function(){
    console.log("App rodando na porta " + PORT);
});