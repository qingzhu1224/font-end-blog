###清楚浮动###

- [参考](https://segmentfault.com/a/1190000004865198)

- 在后面添加一个`<div class="clear></div>`, .clear{clear:both}

- 父元素添加`overflow:hidden`或者`overflow:auto`属性

- 给父元素添加浮动

- clearfix

        .clearfix:after{
            content: ' ';
            display:block;
            hight: 0;
            visibility: hidden;
            clear:both;
        }
        .clearfix{
            zoom:1;
        }


- 给邻元素添加clear属性

- 清浮动原理两种，一种利用clear这个属性，另一种使用BFC