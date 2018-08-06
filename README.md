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

>3.盒子模型

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

>28.src和herf区别

>29.`padding: 100%`，表示按照最近的父元素块的宽度来定;



**javascript**
-------------
>1.什么是闭包？闭包优缺点和适用场景

>2.普通函数和箭头函数区别

>3.0.1+0.2

>4.paseInt() 强制转换

>5.setTimeout和for循环结合的题目

>6.setTimeout和promise

>7.数组有哪些方法

>8.ES6的特性

>9.promise介绍

>10.作用域

>11.创建对象以及继承

>12.原型链(Object、Function以及null关系)

>13.事件循环机制

>14.去抖和节流实现

>15.判断一个数组方法

>16.forEach和map以及reduce区别

>17.    
        function A() {}   
        var a1 = new A()  var a2 = new A();
        编写A，使得a1.id // 1; a2.id //2

>18.构造函数中this作用

>19.bind、call以及apply区别

>20.typeof和instanceof区别

>21.实现深度clone

>22.创建一个对像的方式以及区别(京东面试)

    var a = {}
    var a = new Object()
    function Person(){}
    var a = Object.create(Person.prototype)
>23.说下this的几种不同场景

>24.JS中有哪些内置函数

>25.===和==区别，以及何时使用它们

>26.具体解释下JSONP

>27.实现数组随机排序

>28.      

    //去除字符串前后空格 
    str.trim()
    正则表达式

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

>8.事件代理

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

>2.get和post区别

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
    4.从有效期方面


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
>1.[XSS，怎样预防]（https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)） 
    XSS为跨站脚本（cross site script），为了不和css重复，故叫XSS.    
    防御方式：1.使用转义，把&、>、< 等转义；2.使用innerText，不使用innerHTML 3.JSON.parse() 
>2.CRFS

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

>14.immutable用法

>15.网站错误收集 onError

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

>1.(强缓存)`expires`：用来设置过期时间。存在缺陷：1.http 1.0上使用；2.客户端和服务端的时间不一致时，会出现问题;    

>2.(强缓存)`Cache-Control`: http 1.1使用，以时间间隔标识失效时间，解决了Expires服务器和客户端相对时间的问题。同时比Expires多了很多选项设置。缺点：Http1.1才有，不适用于Http1.0。存在版本问题，到期之前的修改，客户端是不知道的。    

>3.(协商缓存)`Last-Modified`, `Last-Modified-Since` 不存在版本问题，每次请求都会去服务器进行校验。服务器对比最后修改时间，如果相同则返回304，不同返回200以及资源内容。缺点：1.只要资源修改，无论内容是否发生实质性变化，都会将该资源返回客户端。例如周期性重写，这种情况下该资源包含的数据实际上时是一样的。2.以时刻作为标识，无法识别一秒内进行多次修改的情况。3.某些服务器不能精确的得到文件最后的修改时间。    

>4.(协商缓存)`ETage`, `If-None-Match` 可以更加精确地判断资源是否被修改，可以识别一秒内多次修改的情况。不存在版本问题，每次请求都回去服务器进行校验。缺点：1.计算ETag值需要性能消耗。2.分布式服务器存储情况下，计算ETag的算法不一样的话，会导致从一台服务器上获得的页面内容后到另外一台服务器验证时发现ETag不匹配。   

>5.如果资源已经被浏览器缓存下来，在缓存失效之前，再次请求时，默认会先检查是否命中强缓存，如果强缓存命中则直接读取缓存（200 ok from cache），如果强缓存没有命中则发请求到服务器检查是否命中协商缓存，如果协商缓存命中，则告诉浏览器还是可以从缓存读取(304 Not Modified)，否则才从服务器返回最新的资源(200 ok)。这是默认的处理方式，这个方式可能被浏览器的行为改变：


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

>11.基本数据类型：面试官说包括null


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

>10.深度克隆问题

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

>4.try catch是不是块级作用域

>5.写一个判断数据类型的函数

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