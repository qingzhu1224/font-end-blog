// 把一个多维数组变成一维数组

const arr = [1, 2, [4,5]];

const flattern = (arr) => {
    return arr.toString().split(',')
}


const flattern_2 = (arr) => {
    return Array.prototype.concat.apply([], arr)
}