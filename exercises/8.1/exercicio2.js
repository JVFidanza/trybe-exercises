const sorteio = (aposta) => {
    const rand = Math.floor(Math.random()*10);
    console.log(rand);
        if(rand === aposta){
            return ("parabeins");
        } else{
            return ("nope");
        }
    }

console.log(sorteio(2));