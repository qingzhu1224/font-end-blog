/** 得到[0,1)之间的随机数 */
function getRandom() {
    return Math.random();
}

/** 得到[min, max)之间的随机数 */
function getRandomArbitrary(min,max) {
    return Math.random()*(max-min) + min;
}

/**
 * 得到[min, max)之间的整数
 * eg: (5.8, 9.7) 得到的整数区间是[6,8]
 */
function getRandomInt(min,max) {
    var _min = Math.ceil(min);
    var _max = Math.floor(max);
    return Math.floor(Math.random()*(_max-_min)) + _min;
}

/**
 * 得到一个两数之间的随机整数，包括两个数在内
 * eg: (5.8, 9.7) 得到的整数区间是[6,9]
 */
function getRandomIntInclusive(min, max) {
    var _min = min;
    var _max = max;
    return Math.floor(Math.random(0,1)*(_max-_min+1)) + _min;
}