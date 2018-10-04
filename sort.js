
/**
 * arr 排序的数组
 * _left 为0，从第一个元素开始
 * _right 为 arr.length - 1, 从最后一个元素开始
 */
const quickSort = (arr, _left, _right) => {
    let left = _left;
    let right = _right;
    let temp = 0
    if(left <= right) {
        temp = arr[left];
        while(left != right) {
            while(left < right && temp <= arr[right])
            right --;
            arr[left] = arr[right];
            while(left < right && temp >= arr[left])
            left ;
            arr[right] = arr[left];
        }
        arr[right] = temp;
        quickSort(arr, _left, left-1);
        quickSort(arr, right+1, _right);
    }
    return arr;
}

const arr = [3,5,1,7,6,4];

const sortArr = quickSort(arr, 0, 5)


function quickSort(arr, _left, _right) {
    // if(!isArray(arr)) return 'please input a array';
    var left = _left;
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