// 匹配url参数


// 正则表达式 
// * 表示0次或更多次
function getQueryParams(str = window.location.search.slice(1)) {
    if (!str) return {};
    return str.split('&').reduce((ret, param) => {
        const match = param.match(/^(.+)=(.+)$/);
        if (!match) return ret;
        return {
            ...ret,
            [decodeURIComponent(match[1])]: decodeURIComponent(match[2]),
        };
    }, {});}


function getQueryParams(url=window.location.search) {
    const params = url.split('?')[1];
    params.split('&').reduce((ret, item) => {
        const match = item.match(/^(.+)=(.+)$/);
        return {
            ...ret,
            [decodeURIComponent(match[1])]: decodeURIComponent(match[2]),
        };
    }, {})
}