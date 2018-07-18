// & -> &amp;
// < -> &lt;
// > -> &gt;
// " -> &#034;
// ' -> &#039;
function preventXSS(str) {
    return str.replace(/\</g, '&lt').replace(/\>/g, '&gt').replace(/\&/, '&amp');
}