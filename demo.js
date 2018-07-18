// & -> &amp;
// < -> &lt;
// > -> &gt;
// " -> &#034;
// ' -> &#039;
function preventXSS(str) {
    return str.replace(/\</g, '&lt').replace(/\>/g, '&gt').replace(/\&/, '&amp');
}

/** bubble sort*/
function bubbleSort(arr){
    if(!isArray(arr)) return 'please input a array';
    for(var i = 0, len = arr.length; i < len; i++) {
        for(var j = i+1, len = arr.length; j < len; j++) {
            if(a[i]>a[j]) {
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
    return arr;
}

function isArray(arr){
    if(Array.isArray) {
        return Array.isArray(arr);
    } else {
        return Object.prototype.toString.call(this, arr);
    }
}

function mergeSort(arr){
    if(!isArray(arr)) return 'please input a array';
    if(arr.length < 2) return arr;
    var  middle = parseInt(arr.length/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    console.log('left=======>>>>>>>>>>', left)
    console.log('right=======>>>>>>>>>>', right)
    var result = [];
    while(left.length && right.length) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift()) 
    }
    console.log('result', result);
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}

function sort(left, right) {
    var result = [];
    while(left.length && right.length) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift()) 
    }
    console.log('result', result);
}

var nums=[6,10,1,9,4,8,2,7,3,5]

