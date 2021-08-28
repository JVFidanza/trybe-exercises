let n=53;
let str="";
let n2=Math.floor(n/2);
let stp=n2;



for(let i=0; i<n-stp; i++){
    for(let i2=0;i2<n2; i2++){
    str+=" ";
    }
    for(i2=n2; i2<(n-n2); i2++){
        str+="*";
    }
    for(i2=(n-n2);i2<n; i2++){
        str+=" ";
        }
    
    console.log(str);
    n2--;
    str="";
   
}
