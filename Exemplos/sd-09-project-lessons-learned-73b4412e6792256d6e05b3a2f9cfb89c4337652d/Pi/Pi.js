let Pi=0;
let n=100000000; //17 zeros=no halt depois de 1000 segundos

for(let i=1; i<=n; i++){
    Pi+=(1/i**2);
}

Pi=(Math.sqrt(Pi*6));

console.log(Pi);
