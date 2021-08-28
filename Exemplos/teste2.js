let cores = ['black'];
    for(index = 0; index < 3; index++){
        let c = 'rgb(';
        for(let i = 0; i < 3; i++){
        let rnd1 = Math.ceil(Math.random()*260);
        c += rnd1;
        if(i < 2){
            c += ',';
        }
        }
        c += ')';
        cores.push(c);
    }
