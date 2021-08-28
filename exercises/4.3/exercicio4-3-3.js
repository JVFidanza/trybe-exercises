let n=15;
let str="";
let n2=n-1;

for(let i=0; i<n; i++){
    for(let i2=0;i2<n2; i2++){
    str+=" ";
    }
    for(i2=n; i2>n2; i2--){
        str+="*"
    }
    console.log(str);
    n2--;
    str="";
}
