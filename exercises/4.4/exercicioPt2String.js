function Palindrome(string){
    let check='';
    let n=string.length;
    for(let i=0; i<string.length; i++){
        check+=string[n-1];
        n--;
    }
    console.log(check);
    return (check==string);
}

console.log(Palindrome('novo'));

