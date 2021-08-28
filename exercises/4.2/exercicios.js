let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i=0;i<numbers.length; i++){
    console.log(numbers[i]);
}

//2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=0;
for(let i=0;i<numbers.length; i++){
    s=s+numbers[i];
}
console.log(s);

//3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=0;
for(let i=0;i<numbers.length; i++){
    s=s+numbers[i];
}
console.log(s/numbers.length);

//4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=0;
for(let i=0;i<numbers.length; i++){
    s=s+numbers[i];
}
console.log(s/numbers.length);
if(s>20){
    console.log("valor maior que 20")
}else{console.log("valor menor ou igual a 20")}

//5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=0;
for(let i=0;i<numbers.length; i++){
    if(numbers[i]>s){
        s=numbers[i];
    }
}
console.log(s);

//6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=0;
for(let i=0;i<numbers.length; i++){
    if(numbers[i]%2!=0){
        s++;
    }
}
if(s==0){
    console.log("Nenhum numero impar");
}else{ 
    console.log(s);
    }

//7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let s=10000;
for(let i=0;i<numbers.length; i++){
    if(numbers[i]<s){
        s=numbers[i];
    }
}
console.log(s);


//8








