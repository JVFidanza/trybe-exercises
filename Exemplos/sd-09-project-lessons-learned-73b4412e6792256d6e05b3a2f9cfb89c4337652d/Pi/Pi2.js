this.pi = function(count) {
    var inside = 0;

    for (var i = 0; i < count; i++) {
        var x = Math.random()*2-1;
        var y = Math.random()*2-1;
        if ((x*x + y*y) < 1) {
            inside++
        }
    }

    return 4.0 * inside / count;
}

console.log(this.pi(100000000));