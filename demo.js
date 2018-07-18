function preventXSS(str) {
    return str.replace(/\</g, '&lt').replace(/\>/g, '&gt')
}