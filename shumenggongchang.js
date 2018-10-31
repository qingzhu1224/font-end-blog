console.log('one');

setTimeout(function(){
    console.log('two');
}, 0);

console.log('three');


console.log(1);

new Promise(function(resolve, reject){
    reject(true);
    window.setTimeout(function(){
        resolve(false)
    }, 0);
}).then(function(){
    console.log(2)
}, function(){
    console.log(3)
})

console.log(4)