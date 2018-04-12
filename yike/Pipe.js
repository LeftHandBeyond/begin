/**
 * Created by Admin on 2018/4/9.
 */
(function(w){
    //�ѽǶ�ת��Ϊ����
    function angleToRadian(angle){
        return Math.PI / 180*angle;
    };

    //����ʽ�̳�
    function extend(o1,o2){
        for(var key in o2){
            if(o2.hasOwnProperty(key)){
                o1[key] = o2[key];
            }
        }
    }


    /*
     * constructor{Pipe}��ͼ�Ĺ��캯��
     * param{x:number}Բ��x������
     * param{y:number}Բ��y�������
     * param{r:number}Բ�뾶
     * param{data:array}���Ʊ�ͼ���������
     * */
    function Pipe(x,y,r,data){
        this.x = x;
        this.y = y;
        this.r = r;
        this.data = data;

        //һ����ɫ
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

    //��ԭ�����䷽��
    extend(Pipe.prototype,{
        //���Ʊ�ͼ
        draw:function(){

            //�����汣��this
            var self = this;

            var num = 0;
            this.data.forEach(function(val){
                num += val;
            });

            //һ������ֵ��ռ�õĽǶ�
            var baseAngle = 360 / num;

            //����һ��ʼ���ƾ�����ʼΪ0������Ϊ0������
            var startAngle = 0;
            endAngle = 0;

            //������
            this.data.forEach(function(val,i){
                //��һ�����ε���ʼ�Ƕȣ��ǵ�ǰ���εĽ����Ƕ�
                startAngle = endAngle;
                endAngle = endAngle + baseAngle * val;

                //��һ������
                ctx.beginPath();
                ctx.moveTo(self.x,self.y);
                ctx.arc(self.x,self.y,self.r,angleToRadian(startAngle),angleToRadian(endAngle));
                ctx.closePath();
                ctx.fillStyle = self.colors[i];
                ctx.fill();
            })
        }
    });
   //�ѹ��캯����¶��ȫ��
    w.Pipe = Pipe;
})(window);
