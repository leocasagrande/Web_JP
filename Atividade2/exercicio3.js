function exibir(){

    // let matriz = new Array(3).fill(0);
    // matriz = matriz.map(linha => new Array(2).fill(0))

    let matriz = [[1, 2], [3, 4], [5, 6]];

    let matrizTransposta = [];

    console.table(matriz);

    

    for (let i = 0; i < matriz[0].length ; i++) {

        matrizTransposta.push([]);

        for (let j = 0 ; j < matriz.length ; j++) {

            matrizTransposta[i].push(matriz[j][i]);

        }

    }

console.table(matrizTransposta);

 
}

function multiplicacaoMatriz(){

    let matriz = [[1, 2], [3, 4], [5, 6]];

    let matrizTransposta = [];

    let Mmatriz = [];

    // console.table(matriz);

    

    for (let i = 0; i < matriz[0].length ; i++) {

        matrizTransposta.push([]);

        for (let j = 0 ; j < matriz.length ; j++) {

            matrizTransposta[i].push(matriz[j][i]);
        
        }

    }

    for(let k = 0; k < matriz.length; k ++){
        Mmatriz.push([]);
        for (let i = 0; i < matriz.length ; i++) {
            let soma = 0;
            for (let j = 0 ; j < matriz[0].length ; j++) {
                soma += matriz[k][j] * matrizTransposta[j][i];
            }
            Mmatriz[k].push(soma);
        }
    }
console.table(Mmatriz);

}
console.log(' ');
console.log('Matriz e sua transposta: ');
console.log(' ');
exibir();
console.log(' ');
console.log('Multiplicacao das matrizes: ');
console.log(' ');
multiplicacaoMatriz();



