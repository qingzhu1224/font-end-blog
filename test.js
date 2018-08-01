function bubbleSort(arr) {
    if(!isArray(arr)) return '非数组操作';
    for(var i = 0, len = arr.length; i < len;i++) {
        for(var j = i+1, len = arr.length; j < len; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function isArray(arr) {
    if(Array.isArray) return Array.isArray(arr);
    return Object.prototype.toString.call(this, arr);
}

var nums=[6,10,1,9,4,8,2,7,3,5]

var sortNums = bubbleSort(nums);

console.log(sortNums, '排序之后的数据')


function mergeSort(arr) {
    // 不加这句话时，内存泄漏，程序直接挂掉
    if(arr.length < 2) return arr;
    var len = arr.length;
    var middle = parseInt(len / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    var result = [];
    while(left.length && right.length) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift())
    }

    while(left.length) result.push(left.shift())

    while(right.length) result.push(right.shift())

    return result;
}


var nums=[6,10,1,9,4,8,2,7,3,5]

var sortNums = mergeSort(nums);

console.log(sortNums, '排序之后的数据')



function quickSort(arr, left, right){
    var _left = left;
    var _right = right;
    var temp = arr[left];
    if(left <= right) {
        while(left != right) {
            while(right > left && arr[right] > temp ) right--;
            arr[left] = arr[right];
            while(right > left && arr[left] < temp ) left ++;
            arr[right] = arr[left];
            arr[right] = temp;
        }
        quickSort(arr, _left, left-1);
        quickSort(arr, right+1, _right);
    }
    return arr;
}

var nums=[6,10,1,9,4,8,2,7,3,5]

var sortNums = quickSort(nums, 0, 10);

console.log(sortNums, '排序之后的数据')


var a = 2;

function test() {
    var a = 1;
    console.log('this', this)
    console.log(this.a);
}

var o = {test: test}

o.test();


var a = [{
    id: 1, key: 1, name: 'yqz'
}, {
    id: 2, key: 2, name: 'yqz2'
}, {
    id: 3, key: 3, name: 'yqz3'
}, ...];

转换成

var b = {
    id: 1, key: 1, name: 'yqz',
    child: {
        id: 2, key: 2, name: 'yqz2', parent: 1,
        child: {
            id: 3, key: 3, name: 'yqz3',parent: 2,
            child: ...
        }
    }
}



const yqz_computed_zeros = (nums) => {
    let count = 0;
    for(let i = 1; i <= nums; i ++) {
        const sNums = String(i);
        for(let j = 0, len = sNums.length; j < len; j++) {
            if(sNums[j] === '0') count ++ ;
        }
    }
    return count;
}


const DeepClone = (obj) => {
    if(JSON.stringify) {
        return JSON.parse(JSON.stringify(obj))
    }

}

const proxyJSON = (obj) => {
    const _obj = {};
    for(let key in obj) {
        //基本数据类型
        if(typeof obj[key] !== object) {
            
        }
    }
}

const isArray = (obj) => {
    if(Array.isArray) return Array.isArray(obj);
    return Object.prototype.toString.call(obj);
}