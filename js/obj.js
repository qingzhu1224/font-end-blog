const obj={
    name: 'yqz',
    show: function(){
        console.log(name)
    }
}

obj.show()


const obj={
    name: 'yqz',
    show: function(){
        console.log(this.name)
    }
}

obj.show()


const obj={
    name: 'yqz',
    show: function(name){
        console.log(name)
    }
}

obj.show(this.name)


const obj={
    name: 'yqz',
    show: console.log(name)
}

obj.show()


const result = (function() {
    console.log('1');
    return '1';
}, function() {
    console.log(2);
    return 2;
})()

let a =2;
setTimeout(() => {
    a--;
}, 0)

a++;
console.log(a)


let num1 = 5, num2 = 6, sum = num1+++num2;
console.log(sum)


const result = function(){(function() {
    console.log('1');
    return '1';
}, function() {
    console.log(2);
    return 2;
})}()