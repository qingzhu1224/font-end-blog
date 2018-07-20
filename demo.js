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
    // if(!isArray(arr)) return 'please input a array';
    if(arr.length < 2) return arr;
    var  middle = parseInt(arr.length/2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [];
    while(left.length && right.length) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift()) 
        console.log('left', left);
        console.log('right', right)
    }
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

function quickSort(arr, _left, _right) {
    // if(!isArray(arr)) return 'please input a array';
    var left = _left;        m
    var right = _right;
    var temp = 0;
    if(left <= right) {
        temp = arr[left];  //待排序的第一个元素作为基准元素
            while(left != right){   //从左右两边交替扫描，直到left = right
                while(right > left && arr[right] >= temp)  
                     right --;        //从右往左扫描，找到第一个比基准元素小的元素
                  arr[left] = arr[right];  //找到这种元素arr[right]后与arr[left]交换

                while(left < right && arr[left] <= temp)
                     left ++;         //从左往右扫描，找到第一个比基准元素大的元素
                  arr[right] = arr[left];  //找到这种元素arr[left]后，与arr[right]交换

            }
        arr[right] = temp;    //基准元素归位
        quickSort(arr,_left,left-1);  //对基准元素左边的元素进行递归排序
        quickSort(arr, right+1,_right);  //对基准元素右边的进行递归排序
    }
    return arr;
}


var nums=[6,10,1,9,4,8,2,7,3,5];


