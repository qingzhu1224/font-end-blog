### canvas模拟出环形图 ###

- ![图片](https://github.com/qingzhu1224/font-end-blog/blob/master/imgs/echart-canvas.png)


        var canvas = document.getElementById("deviceMaintenance");
        var ctx = canvas.getContext("2d");
        // 开始画之前，清除画布
        ctx.clearRect(0, 0, 220, 208);
        /*填充文字*/
        ctx.font = "14px Microsoft YaHei";
        /*文字颜色*/
        ctx.fillStyle = '#a5a8ca';
        /*文字内容*/
        var insertContent = '在线率';
        var text = ctx.measureText(insertContent);
        /*插入文字，后面两个参数为文字的位置*/
        /*此处注意：text.width获得文字的宽度，然后就能计算出文字居中需要的x值*/
        ctx.fillText(insertContent, 66 - text.width / 2, 56);
        /*填充百分比*/
        ctx.fillStyle = '#e9e9ef';
        ctx.font = '24px Microsoft YaHei Semibold'
        var ratioStr = ((device / deviceTotal).toFixed(2) * 100).toFixed(0) + '%';

        var text = ctx.measureText(ratioStr);
        ctx.fillText(ratioStr, 66 - text.width / 2, 86);
        /*填充title*/
        ctx.fillStyle = '#21aeff';
        ctx.font= '14px Microsoft Yahei';
        var _ratioStr = '设备';
        var text = ctx.measureText(ratioStr);
        ctx.fillText(_ratioStr, 66 - text.width / 2, 140);

        /*开始圆环*/
        var circleObj = {
        ctx: ctx,
        /*圆心*/
        x: 66,
        y: 66,
        /*半径*/
        radius: 60,
        /*环的宽度*/
        lineWidth: 12
        }

        // 画底层图
        circleObj.startAngle = 135 * Math.PI / 180;
        circleObj.endAngle = 45 * Math.PI / 180;
        circleObj.color = '#000';
        this.drawCircle(circleObj);
        // 画底层图结束
        // 画上层圆环
        circleObj.startAngle = 135 * Math.PI / 180;
        circleObj.endAngle = (135 + device / deviceTotal * 270) * Math.PI / 180;
        circleObj.color = '#21aeff';
        var tmpAngle = circleObj.startAngle;
        // 每次偏移量
        var xAngle = 0.8 * (Math.PI / 180);
        var render = function() {
            if(tmpAngle >= circleObj.endAngle){
            return;
            }else if(tmpAngle + xAngle > circleObj.endAngle){
            tmpAngle = circleObj.endAngle;
            }else{
            tmpAngle += xAngle;
            }
            _this.drawCircle(circleObj, tmpAngle);
            requestAnimationFrame(rander);
        };
        render()