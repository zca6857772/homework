/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var myCanvas=document.getElementById("myCanvas");
    var zca=myCanvas.getContext("2d");

    function PaintingFan(color,R,startAngle,endAngle) {
        var startRad=startAngle*Math.PI/180;
        var endRad=endAngle*Math.PI/180;
        zca.beginPath();
        zca.arc(250,250,R,startRad,endRad);
        zca.lineTo(250,250);
        zca.lineTo(250+Math.cos(startRad),250+Math.sin(startRad));
        zca.closePath();
        zca.fillStyle=color;
        zca.fill();
    }

    var angel = 0,speed = 5;
    var  id = setInterval(function () {
        angel += speed;
        if (angel<=80){
            PaintingFan("red",200,0,angel);
        }else if(angel<=150) {
            PaintingFan("blue",200,80,angel);
        }else {
            angel >= 360 && (clearInterval(id));
            PaintingFan("yellow",200,150,angel);
        }
    },100)




























    
})();




