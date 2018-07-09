**interview font-end**
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

>7.两栏、三栏和上下固定中间自适应

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

>22.css sprite是什么？有什么优缺点？

>23.css hack原理是什么？以及常用hack?

>24.渐进增强和优雅降级

>25.`display: block|inline-block|inline`区别

>26.`position: static | relative | absolute | fixed`;

>27.special value | computed value | used value区别

>28.src和herf区别


**javascript**
-------------
>1.什么是闭包？闭包优缺点和适用场景

>2.普通函数和箭头函数区别

>3.0.1+0.2

>4.paseInt() 强制转换

>5.setTimeout和for循环结合的题目

>6.setTimeout和promise

>7.数组有哪些方法

>8.ES6的特性

>9.promise介绍

>10.作用域

>11.创建对象以及继承

>12.原型链

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

>22. 
    //创建一个对像的方式以及区别(京东面试)
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

>13.mouseover/mouseout  mouseenter/mouseleave区别

>14.addListener写法

>15.offsetWidth/offsetHeight/scrollWidth/scrollHeight区别

>16.getScrollOffset封装

>17.获取窗口大小


**http方面**
--------------
>1.状态码

>2.get和post区别

>3.http方法

>4.写出原生ajax

>5.ajax、fetch和axios区别

>6.传统轮询、长轮询、服务器发送事件、websocke等

**持久化方面**
------------
>1.cookie session localstorage sessionstorage

**算法题目**
-----------------
>1.排序（冒泡、快排、归并）

>2.一个数组对象，依照某个字段排序，并取出排第一位的（第一位考虑多个）

>3.数组去重

>4.     
    //解析url(正则方法）
    function getQueryParams(
    str = window.location.search.slice(1),) {
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

**vue**
---------------
>1.vue-router

>2.slot

**webpack**
==========

>1.code spliting

**安全方面**
--------------
>1.XSS，怎样预防

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










