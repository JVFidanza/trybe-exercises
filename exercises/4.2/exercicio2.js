let serie=[];
let q=10;
for(let i = 0; i<q; i++){
    serie[i]= Math.ceil(Math.random()*100);
    console.log(serie[i]);
}

for (i = 1; i < serie.length; i++) {
    for (let j = 0; j < i; j++) {
      if (serie[i] < serie[j]) {
        let position = serie[i];
  
        serie[i] = serie[j];
        serie[j] = position;
      }
    }
  }

  console.log("------------------------------------------------------")
  console.log("------------------------------------------------------")
  console.log("------------------------------------------------------")

  serie.forEach(element => { 
    console.log(element); 
  }); 
 