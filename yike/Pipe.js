/**
 * Created by Admin on 2018/4/9.
 */
(function(w){
    //把角度转换为弧度
    function angleToRadian(angle){
        return Math.PI / 180*angle;
    };

    //混入式继承
    function extend(o1,o2){
        for(var key in o2){
            if(o2.hasOwnProperty(key)){
                o1[key] = o2[key];
            }
        }
    }


    /*
     * constructor{Pipe}饼图的构造函数
     * param{x:number}圆心x的坐标
     * param{y:number}圆心y轴的坐标
     * param{r:number}圆半径
     * param{data:array}绘制饼图所需的数据
     * */
    function Pipe(x,y,r,data){
        this.x = x;
        this.y = y;
        this.r = r;
        this.data = data;

        //一组颜色
        this.colors = ['rosybrown',
            'purple',
            'red',
            'olivedrab',
            'powderblue',
            'peachpuff',
            'papayawhip',
            'paleturquoise',
            'palevioletred',
            'palegreen'];
    }

    //给原型扩充方法
    extend(Pipe.prototype,{
        //绘制饼图
        draw:function(){

            //在外面保存this
            var self = this;

            var num = 0;
            this.data.forEach(function(val){
                num += val;
            });

            //一个数据值所占用的角度
            var baseAngle = 360 / num;

            //假设一开始绘制就是起始为0，结束为0的扇形
            var startAngle = 0;
            endAngle = 0;

            //画扇形
            this.data.forEach(function(val,i){
                //下一个扇形的起始角度，是当前扇形的结束角度
                startAngle = endAngle;
                endAngle = endAngle + baseAngle * val;

                //第一个扇形
                ctx.beginPath();
                ctx.moveTo(self.x,self.y);
                ctx.arc(self.x,self.y,self.r,angleToRadian(startAngle),angleToRadian(endAngle));
                ctx.closePath();
                ctx.fillStyle = self.colors[i];
                ctx.fill();
            })
        }
    });
   //把构造函数暴露到全局
    w.Pipe = Pipe;
})(window);
