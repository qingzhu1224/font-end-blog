function clone(item) {
    if (!item) { return item; } // null, undefined values check
    var types = [ Number, String, Boolean ], 
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function(type) {
        if (item instanceof type) {
            result = type( item );
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = clone( child );
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode( true );    
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    console.log('hello---1')
                    console.log('hello---1', item)
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = clone( item[i] );
                    }
                }
            } else {
                console.log('hello---2')
                // depending what you would like here,
                // just keep the reference, or create new object
                if (false && item.constructor) {
                    console.log('hello---3')
                    // would not advice to do that, reason? Read below
                    result = new item.constructor();
                } else {
                    console.log('hello---4')
                    result = item;
                }
            }
        } else {
            // Symbol、函数
            result = item;
        }
    }

    return result;
}

var copy = clone({
    one : {
        'one-one' : new String("hello"),
        'one-two' : [
            "one", "two", true, "four"
        ]
    },
    two : document.createElement("div"),
    three : [
        {
            name : "three-one",
            number : new Number("100"),
            obj : new function() {
                this.name = "Object test";
            }   
        }
    ]
})


function clone(item) {
    if (!item) { return item; } // null, undefined values check
    var types = [ Number, String, Boolean ], 
        result;

    // normalizing primitives if someone did new String('aaa'), or new Number('444');
    types.forEach(function(type) {
        if (item instanceof type) {
            result = type( item );
        }
    });

    if (typeof result == "undefined") {
        if (Object.prototype.toString.call( item ) === "[object Array]") {
            result = [];
            item.forEach(function(child, index, array) { 
                result[index] = clone( child );
            });
        } else if (typeof item == "object") {
            // testing that this is DOM
            if (item.nodeType && typeof item.cloneNode == "function") {
                result = item.cloneNode( true );    
            } else if (!item.prototype) { // check that this is a literal
                if (item instanceof Date) {
                    result = new Date(item);
                } else {
                    console.log('hello---1')
                    console.log('hello---1', item)
                    // it is an object literal
                    result = {};
                    for (var i in item) {
                        result[i] = clone( item[i] );
                    }
                }
            }
        } else {
            // Symbol、函数
            result = item;
        }
    }

    return result;
}
