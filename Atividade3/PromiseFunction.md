# PromiseFunction Arrow:

    Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assíncrona. Como a maioria das pessoas consomem promises já criadas, este guia explicará o consumo de promises devolvidas antes de explicar como criá-las.

    EXEMPLO:
~~~javascript
let promise = new Promise(function(aceita, rejeita) {
     let x = 1;

     if(x == 0) {
          aceita("Ok");
     } else {
          rejeita("No");
     }
});

promessa.then(
     (valor) => {console.log("Sucesso: " + valor);},
     (error) => {console.log("Erro: " + error)}
)
~~~