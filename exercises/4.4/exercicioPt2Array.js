//2

function indiceMaior(array){
    let indice=-1;
    let valor=array[0];
    for(let i=0; i<array.length; i++){
        if(array[i]>valor){
            valor=array[i];
            indice=i;
        }
    }
    return (indice);
}

let teste=[2, 3, 6, 7, 10, 1];
console.log(indiceMaior(teste));


//3

function indiceMenor(array){
    let indice=-1;
    let valor=array[0];
    for(let i=0; i<array.length; i++){
        if(array[i]<valor){
            valor=array[i];
            indice=i;
        }
    }
    return (indice);
}

let teste2=[2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenor(teste2));

//4

function maisCaracteres(array){
    
}