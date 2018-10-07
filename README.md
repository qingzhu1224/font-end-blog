**font-end blog**
====================

**html**
-------------
>1.DOM是指什么

>2.doctype是什么？举例常见的doctype以及特点

>3.html全局属性有哪些？

>4.什么时web语义化？有什么好处

**css**
-------------
>1.BFC

>2.flex

>3.盒子模型 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing) [知乎](https://www.zhihu.com/question/62017043) [掘金](https://juejin.im/post/59ef72f5f265da4320026f76)

- 盒子模型包括IE盒子模型和标准盒子模型

- IE盒子模型中的width = content + padding + border

- 标准盒子模型中的width = content

- box-sizing: border-box/content-box

- 盒子模型都不包括外边距，如果加上外边距，表示盒子占据大小

- IE8+是标准盒子模型，IE6\IE7\IE8为怪异模型

>4.清除浮动

>5.隐藏一个元素方法

>6.垂直居中（子元素固定高度和不固定高度）

>7.两栏、三栏和上下固定中间自适应

>8.letter-spacing

>9.文字超过范围省略（`overflow: hidden`; `white-space: nowrap`; `text-overflow: ellipsis`）

>10.兼容性问题（从css和js两方面说）

>11.透明的兼容写法

>12.less和sass用处

>13.link和import区别

>14.link visited hover active LoVe HAte

>15.三角形

>16.1px的，小于12px的字

>17.px em rem区别

>18.png/gif/jpeg区别

>19.如何垂直居中一个img标签

>20.img标签的title和alt区别

>21.css选择器有哪些

>22.css sprite是什么？有什么优缺点？

>23.css hack原理是什么？以及常用hack?

>24.渐进增强和优雅降级

>25.`display: block|inline-block|inline`区别

>26.`position: static | relative | absolute | fixed`;

>27.special value | computed value | used value区别

>28.src和herf区别 [参考](https://segmentfault.com/a/1190000010286056)

- `src用于使用外部资源填充/替换对应的元素`。浏览器遇到img标签将会停止页面的加载与解析，直到浏览器加载完图片。`img/script`

- `herf则是建立当前文档和外部资源的联系`。浏览器会理解这个外部资源为样式表，在下载这个资源的时候，页面的下载与解析不会停止。`link/a`

>29.`padding: 100%`，表示按照最近的父元素块的宽度来定;

>30.css换肤

- 获取link标签，替换link标签里的href属性

- 使用cookie记住用户的设置情况


**javascript**
-------------
>1.什么是闭包？闭包优缺点和适用场景

>2.普通函数和箭头函数区别

>3.0.1+0.2

>4.paseInt() 强制转换

>5.setTimeout和for循环结合的题目

>6.setTimeout和promise，循环事件机制，微任务和宏任务

        // 打印顺序：1，3，5，4，2
        console.log('hello word 1')
        for(var i = 0; i< 3;i++) {
            setTimeout(() => {
                console.log('hello word 2');
            }, i*1000)
        }
        new Promise((resolve, reject) => {
            console.log('hello word 3')
            resolve('hello')
        }).then((str) => {
            console.log(str)
            console.log('hello word 4')
        })
        console.log('hello word 5')

>7.数组有哪些方法

>8.ES6的特性

>9.promise介绍

>10.作用域

>11.创建对象以及继承

>12.原型链(Object、Function以及null关系)

>13.事件循环机制

- 微任务（jobs）和宏任务(task)

- 微任务包括 `process.nextTick` ，`promise` ，`Object.observe` ，`MutationObserver`

- 宏任务包括  `script` ， `setTimeout` ，`setInterval` ，`setImmediate` ，`I/O` ，`UI rendering`


>14.去抖和节流实现[参考](https://www.cnblogs.com/fsjohnhuang/p/4147810.html)

- `防抖（debounce）`的作用是，多次触发某个函数时，且每次触发的时间间隔小于设定的时间，则只调用一次，包括`立即执行`和`延迟执行`，`立即执行`的例子比如点赞，`延迟执行`的例子有输入框输入后，希望最后提交一次。

- `节流(throttle)`是指会每隔一定时间（参数wait）调用函数。

>15.判断一个数组方法

>16.forEach和map以及reduce区别

>17.    
        function A() {}   
        var a1 = new A()  var a2 = new A();
        编写A，使得a1.id // 1; a2.id //2

>18.构造函数中this作用

>19.bind、call以及apply区别，模拟实现[参考](https://github.com/mqyqingfeng/Blog/issues/12)

- `bind`、`call`和`apply`都是为了解决this的指向问题。区别是bind不执行这个函数，call和apply执行这个函数

- `bind`返回来的函数可以作为构造函数使用，此时跟绑定的对象没有关系了。

>20.typeof和instanceof区别

   - instanceof 运算符用来测试`一个对象`在`其原型链中`是否存在`一个构造函数的 prototype 属性`。object instanceof constructor

>21.实现深度clone

>22.创建一个对像的方式以及区别(京东面试)

    var a = {}
    var a = new Object()
    function Person(){}
    var a = Object.create(Person.prototype)

>23.说下this的几种不同场景

>24.JS中有哪些内置函数

>25.===和==区别，以及何时使用它们。`==`检查的是`允许类型转换情况下的值的相等性`，而`===`检查不允许类型转换情况下的值的相等性。

>26.具体解释下JSONP

>27.实现数组随机排序

>28.      

    //去除字符串前后空格 
- str.trim()
    
- 正则表达式 `const pattern = /^\s+|\s+$/gi`;

>29.decodeURIComponent和decodeURI区别（encodeURI和encodeURIComponent）    
`encodeURI`主要用于整个URI,encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号.`encodeURIComponent`用于对URI中的某一段，会对它发现的任何非标准字符进行编码

>29.new Date()的一些api操作

>30.toString()和toLocalString()区别  两者主要区别用在`Date对象`上，`toLocalString会判断当前语言环境，转换为当前环境的字符串`

>31.有哪些循环操作，它们的区别是什么

>32.数组又哪些方法

>33.var a = 'name';a.age = 28;console.log(a.age) 打印出来是undefined


**javascript DOM**
----------------
>1.获取元素的方法；

>2.生成100个li，依次点击，弹出1，2，3, ...

>3.拖拽

>4.增、删、改DOM

>5.阻止默认事件

>6.阻止冒泡

>7.冒泡和事件捕获

- `事件捕获`, 通俗的理解就是，当鼠标点击或者触发dom事件时，浏览器会从根节点开始由外到内进行`事件传播`，即点击了子元素，如果父元素通过事件捕获方式注册了对应的事件的话，会先触发父元素绑定的事件。

- `事件冒泡`, 与事件捕获恰恰相反，事件冒泡顺序是由内到外进行事件传播，直到根节点。

- 从HTML -> BODY-> 元素

- 先捕获，后冒泡

>8.事件代理[事件委托](https://github.com/yonyouyc/blog/issues/25)

- `事件委托`就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

>9.location

>10.图片懒加载实现

>11.DOM节点中Attribute和property区别

>12.window.onload和DOMContentLoad区别

>13.mouseover/mouseout  mouseenter/mouseleave区别

>14.addListener写法

>15.offsetWidth/offsetHeight/scrollWidth/scrollHeight区别

>16.getScrollOffset封装

>17.获取窗口大小


**http方面**
--------------
>1.状态码
    1. 1** 信息  服务器收到请求，需要请求者继续执行操作   
    2. 2** 成功    操作被成功接受并处理
    3. 3** 重定向      需要进一步的操作以完成请求
    4. 4** 客户端错误     请求包含语法错误或无法完成请求
    5. 5** 服务端错误   服务器在处理请求的过程中发生了错误

>2.get和post区别  请求方法（option）

>3.http方法

>4.写出原生ajax

>5.ajax、fetch和axios区别

>6.传统轮询、长轮询、服务器发送事件、websocke等

**持久化方面**
------------
>1.cookie session localstorage sessionstorage   

    1.从大小方面
    2.每次请求是否携带
    3.从安全方面
    4.从有效期方面v

**算法题目**
-----------------
>1.排序（冒泡、快排、归并）
        
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

>2.一个数组对象，依照某个字段排序，并取出排第一位的（第一位考虑多个）（新浪面试题）

>3.数组去重

>4.     
    //解析url(正则方法）
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

**react**
----------------
>1.实际项目中遇到哪些困难

>2.react生命周期

>3.提高react性能

>4.一个输入框，先输入1，再输入2，再输入1，这个过程，会一直在更新dom吗？

>5.受控组件：、input或select都要绑定一个change事件;每当表单的状态发生变化,都会被写入组件的state中,这种组件在React中被称为受控组件;

>6.setState机制

- [参考](https://juejin.im/post/5b45c57c51882519790c7441)

- 异步同步问题[参考1](http://imweb.io/topic/5b189d04d4c96b9b1b4c4ed6) [参考2](https://juejin.im/post/5b45c57c51882519790c7441) [参考3](https://segmentfault.com/a/1190000003969996)

- 批量更新问题

- 操作数据[参考](https://juejin.im/entry/59522bdb6fb9a06b9a516113)

>7.react如何加载组件，并说出生命周期

>8.action的好处



**vue**
---------------
>1.vue-router

>2.[slot](https://www.w3cplus.com/vue/vue-slot.html);是指vue的内容分发，也称插槽。它显示与否以及怎么显示完全是由父组件来控制。具体显示位置由子组件自身决定。分为单个插槽、具名插槽（slot）以及作用域插槽(slot-scoped)。

>3.计算属性：模板内的表达式非常便利，如果放入太多的逻辑会让模版过重而难以维护。计算属性和方法的区别是：计算属性是基于依赖进行缓存；侦听器：当需要在数据变化时执行异步或开销较大的操作时，这个方法有用。watch.

>4.tansation的属性有哪些

>5.mixmin混入

**webpack**
==========

>1.code spliting

>2.webpack 3 和 webpack 4的区别;去除commonchunk plugin 改用 webpack.optimize.SplitChunksPlugin

>3.webpack的插件有哪些？

**安全方面**
--------------
>1.[XSS，怎样预防]（https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)

- XSS主要是修改`HTML`节点或者执行`JS`代码来攻击网站。
    
- XSS为跨站脚本（cross site script），为了不和css重复，故叫XSS.    
    
- 防御方式：1.使用转义，把&、>、< 等转义；2.使用innerText，不使用innerHTML 3.JSON.parse() 

>2.CRFS

- `CRFS是指利用用户的登录态发起恶意请求`。

- Get 请求不对数据进行修改

- 不让第三方网站访问到用户 Cookie

- 阻止第三方网站请求接口

- 请求时附带验证信息，比如验证码或者 token


>3.跨域

>4.JSONP实现，使用时有什么问题

**其他**
--------------
>1.SPA

>2.MVVM

>3.订阅发布模式

>4.提高页面性能

>5.OOP

>6.函数式编程

>7.从输入url到看到页面的整个过程

>8.缓存

>9.内存泄漏问题

>10.resetfull

>11.前端要注意哪些SEO

>12.浏览器内核分别是什么

>13.怎样实现单点登录

>14.immutable用法 [参考](https://github.com/camsong/blog/issues/3)

- Immutable Data 就是一旦创建，就不能再被更改的数据。对Immutable对象的任何修改或添加删除操作都会返回一个新的Immutable对象。Immutable实现的原理是Persistent Data Structure(持久化数据结构)，也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免deepCopy把所有节点都复制一遍带来的性能损耗，immutable使用了Structural Sharing(结构共享)，即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其他节点则进行共享。

>15.网站错误收集 onError  `收集用户报错还是比较简单的，利用 window.error 事件，然后根据 Source Map 定位到源码（但一般查不出什么）` [参考](https://github.com/kenberkeley/redux-simple-tutorial)

>15.fetch请求，超过5秒后，前端返回，已超时，写出代码。[参考](https://stackoverflow.com/questions/46946380/fetch-api-request-timeout/50096215#50096215)     
    
    function fetchWithTimeout(url, options, timeout = 5000) {
        return Promise.race([
            fetch(url, options),
            new Promise((_, reject) => {
                setTimeout(() => reject(new Error('timeout)), timeout)
            })
        ]);
    }

    fetch('http: //google.com', options, 5000)
    .then((result) => {
        // handle result
    })
    .catch((e) => {
        // handle errors and timeout errors
    })

>16.[浏览器缓存](https://mp.weixin.qq.com/s/Fei23IMbFKIzOzICmW641w) [腾讯课堂文档](http://imweb.io/topic/5795dcb6fb312541492eda8c)  [强缓存和协商缓存](http://www.cnblogs.com/lyzg/p/5125934.html#!comments)
------------------------------

>1.(强缓存)`expires`：用来设置过期时间。存在缺陷：1.`http 1.0上使用`；2.`客户端和服务端的时间不一致时，会出现问题`;    

>2.(强缓存)`Cache-Control`: http 1.1使用，以时间间隔标识失效时间，解决了Expires服务器和客户端相对时间的问题。同时比Expires多了很多选项设置。缺点：Http1.1才有，不适用于Http1.0。`存在版本问题，到期之前的修改，客户端是不知道的`。max-age=30(毫秒)

>3.(协商缓存)`Last-Modified`, `If-Modified-Since` 不存在版本问题，每次请求都会去服务器进行校验。服务器对比最后修改时间，如果相同则返回304，不同返回200以及资源内容。缺点：1.只要资源修改，无论内容是否发生实质性变化，都会将该资源返回客户端。例如周期性重写，这种情况下该资源包含的数据实际上时是一样的。2.以时刻作为标识，无法识别一秒内进行多次修改的情况。3.某些服务器不能精确的得到文件最后的修改时间。    

>4.(协商缓存)`ETage`, `If-None-Match` 可以更加精确地判断资源是否被修改，可以识别一秒内多次修改的情况。不存在版本问题，每次请求都回去服务器进行校验。缺点：1.计算ETag值需要性能消耗。2.分布式服务器存储情况下，计算ETag的算法不一样的话，会导致从一台服务器上获得的页面内容后到另外一台服务器验证时发现ETag不匹配。   

>5.如果资源已经被浏览器缓存下来，在缓存失效之前，再次请求时，默认会先检查是否命中`强缓存`，如果强缓存命中则直接读取缓存`（200 ok from cache）`，如果强缓存没有命中则发请求到服务器检查是否命中`协商缓存`，如果协商缓存命中，则告诉浏览器还是可以从缓存读取`(304 Not Modified)`，否则才从服务器返回`最新的资源(200 ok)`。这是默认的处理方式，这个方式可能被浏览器的行为改变：


### 用户刷新／访问行为 ###

>1.`在URL输入栏中输入回车／通过书签访问`---》如果没有过期，直接返回200 ok(from cache) 

>2.`F5/点击工具栏中的刷新按钮／右键菜单重新加载`  如果没有过期，则返回304 （Not Modified）   

>3.`Crtl + F5`  强制刷新网页，直接从服务器加载，跳过强缓存和协商缓存，强制从服务器端那一份资源过来 200（ok）  

    If-Modified-Since 如果客户端传过来的最后修改时间与服务器上的一致，则直接回送304

浪淘金
------------------------------------
>1.setTimeout和websocket区别 [参考](https://blog.csdn.net/w05980598/article/details/79256985)       
    `setInterval`和`seiTimeout`的缺陷：程序在每次请求时都会`新建一个HTTP请求`，然而并不是每次都能返回所需的新数据。当同时发起的请求达到一定数目时，会对`服务器造成较大负担`，`带宽浪费`。`长轮询`长轮询的基本思想是在每次客户端发出请求后，服务器检查上次返回的数据与此次请求时的数据之间是否有更新，如果有更新则返回新数据并结束此次连接，否则服务器 hold 住此次连接，直到有新数据时再返回相应。这个主要缺点是每次连接的保持是以消耗服务器资源为代价的。`服务器发送事件（Server-send Event）`可以实现服务器到客户端的单向数据通信。

    
        var ws = new WebSocket("wss://echo.websocket.org");
        ws.onopen = function(evt) { 
            console.log("Connection open ..."); 
            ws.send("Hello WebSockets!");
        };
        ws.onmessage = function(evt) {
            console.log( "Received Message: " + evt.data);
            ws.close();
        };
        ws.onclose = function(evt) {
            console.log("Connection closed.");
        };      


>2.vue嵌套路由原理以及嵌套路由、路由参数怎么取到

>3.用js实现1-10000中有多少个0？

>4.var str = 'hello' 实现str.repeateStr(3) 得到'hellohellohello'

>5.垂直居中（无宽度和高度）

>6.vue-router实现原理

- 分为两种模式：hash和history

- hash主要是带有"#"号，并且#号后面的信息不发送给服务器，主要使用onhashchange事件来监听路由的变化

- history主要使用的是go\back\forward\onpushState\

>7.输出a的值
       
    if(!(a in window)) {
        var a = 'hello'
    }
    console.log(a)

>8.[less的特性](http://www.bootcss.com/p/lesscss/#synopsis)  变量、计算、函数、混合、注释、嵌套、作用域、import、javascript代码

>9.css reset的作用，以及盒子模型

>10.获取元素的方法

>11.判断一个数组方法

>12.`柯里化（currying）`指的是将一个多参数的函数拆分成一系列函数，每个拆分后的函数都只接受一个参数（unary）。

>13.函数式编程

>14.图片比较大，上传时，怎么压缩



马蜂窝
================================
>1.数组已有的原型方法修改问题；

>2.在1-50中，取出10个数，不得重读，组成一个数组；  Math.floor(Math.random() * (max - min)) + min;

>3.多维数组排列组合问题；

>4.setTimeout和promise问题

>5.原型链问题

>6.强制缓存和协商缓存问题

>7.vue的生命周期和通讯问题

>8.ES6的特性问题

>9.垂直居中布局问题

>10.性能优化问题

>11.基本数据类型和引用数据类型（基本数据类型包括：`number`、`string`、`undefined`、`boolean`、`null`、`object`、`symbol`(ES6)）共`7`种。基础数据类型是栈存储，引用数据类型是`堆存储` [参考](https://www.imooc.com/article/1181)

百度
=====================

>1.setState  按钮点击1，2，

>2.setState合并问题

>3.数组[1,2,3,4,5,6]，每一秒弹出1，2，3

>4.max_name => maxName

>5.双向数据绑定写出来

>6.fetch

>7.react生命周期

>8.正则写出邮箱

>9.创建对象继承

>10.深度克隆问题 JSON.parse()和JSON.stringify()只是用于可enumberable的，[参考]()

>11.自己写一个路由

>12.浏览器缓存问题（都是缓存什么东西，怎么缓存）

>13.跨域问题（JSONP实现).`JSON`缺点只能是get请求.`JSONP`, `document.domain`, `window.name`, 代理问题
    
    function JSONP(url) {
            var dosomething = function(data) {
                console.log(data);
            };
            var url = `${url}?callback=dosomething`;
            // 创建<script>标签，设置其src属性
            var script = document.createElement('script');
            script.setAttribute('src', url);
            document.getElementsByTagName('body')[0].appendChild(script);
    }

>14.介绍Promise，同步和异步调用接口

>15.SPA的作用


理房通
===================================
>1。一个div有宽高，在浏览器中垂直居中

>2.css画一个三角形

>3.读程序题目    

    var a = 2;
    function test() {
        var a = 1;
        console.log(this.a);
    }
    var o = {test: test}
    o.test()  //undefined

>4.try catch是不是块级作用域, `catch`是一个`伪块级作用域`

>5.写一个判断数据类型的函数
        function whichType(a) {
            var typeOf_a = typeof a;
            switch(typeOf_a) {
                case 'string':
                    return '字符串';
                case 'boolean':
                    return '布尔';
                case 'function':
                    return '这是个函数哦';
                case 'undefined':
                    return 'undefined';
                case 'symbol':
                    return '符号';
                case 'number':
                    return _isNaN ? 'NaN哦': '数字了';
                case 'object':
                    return _isObject(a)? 'object' : (_isArray(a) ? '数组哦': '我也不知道我是什么');
                default:
                    return 'do not which type is'
                
            }
        }

        function _isNaN(a) {
            if(isNaN) return isNaN;
            return !(a === a);
        }

        function _isArray(a) {
            if(Array.isArray) return Array.isArray(a);
            return Object.prototype.toString.call(a) === '[object Array]';
        }

        function _isObject(a) {
            return (a !== null) && (a.constructor === Object);
        }


>6.[{a:4,b:'h'}, {a:1,b:'h'}, {a:3,b:'h'}, {a:2,b:'h'}] 依照a从小到大排序，除了用sort还有什么其他方法

>7.<div><a href="xxxxxx"></a><a href="xxxxxx"></a><a href="xxxxxx"></a><a href="xxxxxx"></a><a href="xxxxxx"></a>...</div>使用尽量少的代码，以此弹出各个a的ref，并阻止默认事件。

>8.前后端分离问题

>9.转换数据类型 

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

>10.react中key的用处，为什么要设置它

>11.react的生命周期，以及在什么地方可以使用真实dom,以及调取接口？



必问
=================

>1.ES6新特性  ----- 箭头函数／promise   强缓存和协商缓存  排序  正则   原型


[今日头条面试](https://cloud.tencent.com/developer/article/1140218)
===============================================================


[小程序面试题](http://www.bslxx.com/m/view.php?aid=1027)
==========================

##### 图片等比缩放 ####
        img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
        }


react
=================

1.redux中的状态是怎么绑定道组件中去的？


需要复习的点
============================

>1.vue的双向数据、watch和vue的实现

>2.手写继承、包括ES6

>3.为什么使用虚拟DOM，对虚拟DOM的理解

>4.promise和箭头函数

>5.webpack原理

>6.做一些算法题

>7.深度克隆算法

>8.浏览器缓存

>9.服务器端渲染

>10.写一个路由，可参考老版本的路由写法

>11.性能优化

>12.浏览器渲染原理

>13.react组件编写时，为什么使用super


### 面试题[掘金](https://juejin.im/post/5b6e60a05188251afe7bbc0e) ###

>1.执行结果

        var length = 10;
        function fn() {
            console.log(this.length);
        }

        var obj = {
            length: 5,
            method: function(fn) {
                fn();
                arguments[0]();
            }
        };
        obj.method(fn, 1);

>2.作用域 [`try`和`catch`](https://www.web-tinker.com/article/20331.html)

        (function () {
            try {
                throw new Error();
            } catch (x) {
                // 虽然像一个函数接受参数，貌似会形成一个作用域，但是并不会
                var x = 1, y = 2;
                console.log(x);
            }
            console.log(x);
            console.log(y);
        })();

        (function () {
            var x,y;  // 外部变量提升
            try {
                throw new Error();
            } catch (x/* 内部的x */) {
                x = 1; //内部的x，和上面声明的x不是一回事！！
                y = 2; //内部没有声明，作用域链向上找，外面的y
                console.log(x); //当然是1
            }
            console.log(x);  //只声明，未赋值，undefined
            console.log(y);  //就是2了
        })();


>3.[作用域问题](https://github.com/creeperyang/blog/issues/16)

        function testOrder(arg) {
            console.log(arg); // arg是形参，不会被重新定义
            console.log(a); // 因为函数声明比变量声明优先级高，所以这里a是函数
            var arg = 'hello'; // var arg;变量声明被忽略， arg = 'hello'被执行
            var a = 10; // var a;被忽视; a = 10被执行，a变成number
            function a() {
                console.log('fun');
            } // 被提升到作用域顶部
            console.log(a); // 输出10
            console.log(arg); // 输出hello
        }; 
        testOrder('hi');

>4.[函数参数和函数内的变量同名问题](https://www.cnblogs.com/fool/archive/2010/10/19/1855261.html).`唯一强调的一点是在内部用var定义与形式参数同名的变量是无意义的，因为在程序'预解析'后，会将它们看作为同一个变量。`

        function say(msg,other,garbage){
            console.log(arguments[1]); // world
            var other = 'nice to meet you!';
            var msg;
            console.log(arguments.length);// 2
            console.log(msg);// hello
            console.log(other);//'nice to meet you!';
            console.log(arguments[1]);// 'nice to meet you!';
            console.log(garbage);// undefined
        }
        say('hello','world');

>5.`运算符`(在js中，这种运算符是从左到右的。)

        console.log(1 < 2 < 3);
        console.log(3 > 2 > 1);

>6.typeof运算符

        1. typeof  typeof 1
        2. typeof undefined == typeof null   
        3. typeof NULL 


>7.ES6的模块化、CommonJS、CMD和AMD的区别[参考1](https://juejin.im/post/5ab28582518825611a40603e)[参考2](https://juejin.im/post/5ab3194c518825555e5dbfa3)

- CommonJS用于服务器端、CMD和AMD用于浏览器段，ES6模块用于浏览器端和服务器端

- CommonJS是同步加载，CMD和AMD是异步加载，使用的时候加载，ES6是静态加载的设计思想，使得在编译时就可以确定模块的依赖关系，以及输入、输出的变量。

- 浏览器同步加载script，遇到script标签就会停止渲染，执行完脚本才会继续渲染。如果遇到特别大的脚本，就会长时间白屏，用户体验很差。

- 浏览器同步加载script标签，使用async和defer标签就可以异步加载。defer等到页面渲染完成才会执行。async只要脚本加载完成，立即执行

- ES6和CommonJS区别，CommonJS模块输出是值的拷贝，ES6模块输出是值的引用（引用时可能修改到模块的值），CommonJS是运行时加载，ES6模块是编译时加载

- AMD+require.js CMD+sea.js。AMD在使用前就准备好，CMD是用到了再去准备模块


>8.正则表达式[参考](https://c.runoob.com/front-end/854) [正则练习](https://leaverou.github.io/regexplained/)

- `\w`表示`[a-zA-Z0-9_]`

- `\d`表示`[0-9]`

- `\s`表示匹配任意的空白符

- `. `匹配除换行符以外的任意字符

- `[\u4e00-\u9fa5]`匹配中文

- `* `表示 0次或多次

- `？`表示0次或1次

- `+`表示1次或多次

- {n, m} 表示`次数，不是什么字节或字符`

- 邮箱正则: ^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$

- var pattern = /\d{3,5}/;  `pattern.test(str)`  `str.match(pattern)`  `str.replace(pattern)`
            
-  大于0的六位整数，且两位小数 `/^[1-9]\d{5}(\.\d{1,2})?$/g`

- `字节（Byte）`：字节是通过网络传输信息（或在硬盘或内存中存储信息）的单位。

- `字符`: 人们使用的记号，抽象意义上的一个符号。 '1'， '中'， 'a'， '$'， '￥'， ……

- `按照ANSI编码标准，标点符号、数字、大小写字母都占一个字节，汉字占2个字节。按照UNICODE标准所有字符都占2个字节。`


>9.webpack学习文档[参考](https://survivejs.com/webpack/appendices/glossary/)

>10.事件

- e.target 指向触发事件监听的对象。

- e.currentTarget 指向添加监听事件的对象。

- this与e.currentTarget相同

- 事件是先捕捉后冒泡

>11.fetch、axios、以及ajax区别


>12.Load 和 DOMContentLoaded 区别

- `Load`事件触发代表页面中的DOM\CSS\JS\图片已经全部加载完毕

- `DOMContentLoaded`事件触发代表初始的HTML被完全加载和解析，不需要等待CSS、JS、图片加载

>13.重绘（repaint）和回流(reflow)

- 重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘

- 回流是布局或者几何属性需要改变就称为回流。

- 使用 visibility(visible|hidden) 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）

- 把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改100次，然后再把它显示出来

- 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

- CSS 选择符从右往左匹配查找，避免 DOM 深度过深

- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。

>14.Service Worker [参考](https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-debug)

>15.怎么画出1px

>16.密码安全 `加盐`也就是给原密码添加字符串，增加原密码长度。但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用`验证码增加延时`或者`限制尝试次数的方式`。`并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误`。

>17.proxy和Reflect

- `Proxy`用于修改某些操作的默认行为

-

>18.遍历树 


#### panshi ####

>1.组件的理解，组件和继承、以及多态

>2.flex的考察和理解

>3.push

>4.浏览器存储

>5.vue和react的比较以及选择

>6.标准盒子模型

>7.[0，7) 之间的随机数

>8.最近遇到的困哪