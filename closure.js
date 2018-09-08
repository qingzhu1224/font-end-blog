for(var i = 0; i<5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i*1000)
}


for(var i = 0; i < 5;i++) {
    (function(j){
        setTimeout(function timer(){
            console.log(j)
        }, i*1000)
    })(i)
}

for(let i = 0; i<5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i*1000)
}

for(var i = 0; i<5; i++) {
    setTimeout(function timer(j) {
        console.log(j)
    }, i*1000, i)
}