Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    var args = [...arguments].slice(1);
    var result = context.fn(...args);
    delete context.fn
    return result
}







Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    var args = arguments.slice(1);
    var result = context.fn(...args);
    delete context.fn;
    return result;
}


Function.prototype.myApply = function(context,arr) {
    var context = context || window;
    context.fn = this;
    var result = context.fn(...arr);
    delete context.fn;
    return result;
}

Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 如果是构造函数的话，里边的this指向实例
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

















































