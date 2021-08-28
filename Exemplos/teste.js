
//1
// function compareTrue(bool1, bool2) {
//     if(bool1==true && bool2==true){
//       return (true);
//     }
//     else{
//       return (false);
//     }
//   }
  
//   let b1=true;
//   let b2=true;

//   console.log(compareTrue(b1, b2));
//   console.log(typeof(b1));




//2
// function calcArea(base, height) {
//     return ((base*height)/2);
//   }

//   let b=51;
//   let h=1;

//   console.log(calcArea(b, h));




//3
// function splitSentence(string) {
//     let array=[];
//     let word='';
//     let wCount=0;
  
//     for(let i=0; i<string.length; i++){
//       if(str+!=' '){
//         word+=str+;
//       }
//       if(str+==' ' || i==string.length-1){
//         array[wCount]=word;
//         word='';
//         wCount++;
//       }
//     }
//     return (array);
//   }
//   console.log(splitSentence('puta que pariu meu gato pos um ovo'));



//4

// function concatName(array) {
//     let str='';
//     let count=array.length;
//     str=array[count-1];
//     str+=', ';
//     str+=array[0];
//     return (str);
//   }
  

//   let ex = ['captain', 'my', 'captain'];
//   console.log(concatName(ex));


// 5

// function footballPoints(wins, ties) {
//     return ((wins*3)+ties);  
//   }

// console.log(footballPoints(0,0));




// 6
// function highestCount(array) {
//     let maior=array[0];
//     let soma=0;
   
//     for(let i=0; i<array.length; i++){
//       if(array[i]>maior){
//         maior=array[i];
//       }
//     }
   
//     for(i=0; i<array.length; i++){
//       if(maior==array[i]){
//          soma++;
//       }
//     }
   
//     return (soma);
//    }

//    let a=[0, 0, 0];
// console.log(highestCount(a));





// 7
// function catAndMouse(mouse, cat1, cat2) {
//     let c1=cat1-mouse;
//     let c2=cat2-mouse;
//     if(c1<0){
//       c1=c1*(-1);
//     }
//     if(c2<0){
//       c2=c2*(-1);
//     }
  
//     if(c1<c2){
//       return ('cat1');
//     }
//     if(c2<c1){
//       return ('cat2');
//     }
//     if(c1==c2){
//       return ('os gatos trombam e o rato foge');
//     }
// }
// let m=3;
// let c1=3;
// let c2=5;

// console.log(catAndMouse(m, c1, c2));






// 8
// function fizzBuzz(array) {
//     let fb = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i]%3==0){
//           fb[i]='fizz';
//         }
//         if(array[i]%5==0){
//           fb[i]='buzz';
//         }
//         if(array[i]%3==0 && array[i]%5==0){
//           fb[i]='fizzBuzz';
//         }
//         if(array[i]%3!=0 && array[i]%5!=0){
//           fb[i]='bug!';
//         }
//     }
//     return (fb);
//   }
// let a = [9, 25];
// console.log(fizzBuzz(a));



//9
// function encode(string) {
//     let c = '';
//     let str = '';  
//     for(let i=0; i<string.length; i++){
//       c=string[i];  
//         switch (c){
//           case 'a':
//             str+='1';
//             break;
//           case 'e':
//             str+='2';
//             break;
//           case 'i':
//             str+='3';
//             break;
//           case 'o':
//             str+='4';  
//             break;      
//           case 'u':
//             str+='5';  
//             break; 
            
//             default:
//                 str+=c;     
//           }
//     }
//     return (str);
// }
// let str = "hi there!";
// console.log(encode(str));

// function decode(string) {
//     let c = '';
//     let str = '';  
//     for(let i=0; i<string.length; i++){
//       c=string[i];  
//         switch (c){
  
//           case '1':
//             str+='a';
//             break;
    
//           case '2':
//             str+='e';
//             break;
      
//           case '3':
//             str+='i';
//             break;
        
//           case '4':
//             str+='o';  
//             break;      
          
//           case '5':
//             str+='u';  
//             break; 
          
//           default:
//             str+=c;
//             break;     
//           }
//     }
//     return (str);
//   }

//   console.log(decode(encode(str)));



// 10
// function techList(array, name) {
//     if(array!=''){
//     array.sort(); //Source: https://www.w3schools.com/jsref/jsref_sort.asp
  
//     let ar = [];
//     let ob = {}
  
//     for(let i=0; i<array.length; i++){
//         ob.tech = array[i];
//         ob.name = name;
//         ar.push(ob); //Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
//         ob={};
//       }
//     //   if(array.tech){
//     //     return ("Vazio!");
//     //   }
//   return (ar);
//     }else{
//         return ("Vazio!");
//     }
// }


// //   "React", "Jest", "HTML", "CSS", "JavaScript"
// let a = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(a);
// let n = 'Joao';

// console.log(techList(a, n));




//11
// function techList(array, name) {
//   if(array!=''){
//   array.sort(); //Source: https://www.w3schools.com/jsref/jsref_sort.asp

//   let ar = [];
//   let ob = {}

//   for(let i=0; i<array.length; i++){
//       ob.tech = array[i];
//       ob.name = name;
//       ar.push(ob); //Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
//       ob={};
//     }

// return (ar);
//   }else{
//       return ("Vazio!");
//   }
// }

// // Desafio 11
// function generatePhoneNumber(array) {
//   let num = '';
//   let s = 1;
//   if(array.length!=11){
//     return ('Array com tamanho incorreto.');
//   }else{
//       for(let i = 0; i < array.length; i++){
//           for(let i2 = i; i2 < array.length; i2++){
//             if(i!=i2){
//               if(array[i]==array[i2]){
//                 s++;
//               }

//             }
//           }
//           if(s >= 3 || array[i]>9 || array[i] < 0){
//             return ('não é possível gerar um número de telefone com esses valores');
//           }
         
//         s=1;
//       }
//   }

//   num+='(';
//   num+=array[0];
//   num+=array[1];
//   num+=') ';

//   for(let i = 2; i < 7; i++){
//     num+=array[i];
//   }
//   num+='-';
//   for(let i = 7; i < 11; i++){
//     num+=array[i];
//   }

//   return (num);
  
// }
// let ar = [0,2,3,4,4,2,7,8,9,9,4];
// let ar2 = [1, 2, 3, 4, 5, 6, 7, 8, 7, 3, 1];
// console.log(generatePhoneNumber(ar));
// // (02) 34427-8994





//12

// Desafio 12
// function triangleCheck(lineA, lineB, lineC) {
//   if(lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)&&
//       lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)){
//         return (true);
//       }
//       else{
//         return (false);
//       }
// }

// console.log(triangleCheck(10,14,80));



//13

function hydrate(string) {
  let numbers = string.match(/\d+/g).map(Number);
  let s = 0;
  for(let i = 0; i < numbers.length; i++){
    s += numbers[i];
  }
  if(s == 1){
    return (s + ' copo de água')
  }else{
  return (s + ' copos de água')
  }
}

let str = '2 cer, 3 carai, 50 porra';
console.log(hydrate(str));