/**
 * Created by Administrator on 2016/9/17 0017.
 */
(function () {
    var myCanvas=document.getElementById("myCanvas");
    var zca=myCanvas.getContext("2d");
    /*竖线*/
    zca.beginPath();
    function sLine(X) {
        zca.beginPath();
        zca.moveTo(X, 50);
        zca.lineTo(X, 600);
        zca.stroke();
        zca.closePath();
    }
    sLine(100);
    sLine(700);


    var arr=[200,180,160,140,120,100,80,60,40,20,0];
    function hLine() {
        for (var i = 50; i <= 600; i += 50) {
            /*横线*/
            zca.beginPath();
            zca.moveTo(100, i);
            zca.lineTo(700, i);
            zca.stroke();
            zca.closePath();
            /*数字*/
            for(var j=0;j<arr.length;j++){
                zca.save();
                zca.beginPath();
                zca.strokeStyle="black";
                zca.font="25px 宋体";
                zca.fillText(arr[j],60,50*j+100);
                zca.closePath();
                zca.restore();
            }
        }
    }
    hLine();
    var index=0;

    function time() {
        index++;
        if (index >= 60) {
            index = 60;
        }

        var arrCylinder = [60, 90, 150, 130, 170, 190, 125, 175, 155, 165, 155, 145];

        function cylinder() {
            for (var i = 0; i < arrCylinder.length; i++) {
                // /*柱状图*/
                // zca.beginPath();
                // zca.lineWidth=30;
                // zca.strokeStyle="black";
                // zca.moveTo(50*i+125, 600);
                // zca.lineTo(50*i+125, 600-arrCylinder[i]*2.5);
                // zca.stroke();
                // zca.closePath();

                /*折线*/
                if(index >= 60){
                    zca.save();
                    if (i == 0) {
                        zca.moveTo(100, 600);
                    } else {
                        zca.moveTo(120 + (i - 1) * 50, 200 + 2 * (200 - arrCylinder[i - 1]))
                    }
                    zca.strokeStyle = "red";
                    zca.lineTo(120 + i * 50, 200 + 2 * (200 - arrCylinder[i]));
                    zca.stroke();
                    zca.restore();
                }
                // /*圈圈*/
                // zca.save();
                // zca.beginPath();
                // zca.strokeStyle = 'yellow';
                // zca.arc(index / 60 * (120 + i * 50), index / 60 * (200 + 2 * (200 - arrCylinder[i])), 5, 0, index / 60 * 2 * Math.PI);
                // zca.stroke();
                // zca.closePath();
                // zca.restore();
                /*月份*/
                zca.save();
                zca.beginPath();
                zca.strokeStyle = "black";
                zca.font = "25px 宋体";
                zca.fillText((i + 1) + "月", 50 * i + 100, 620);
                zca.closePath();
                zca.restore();
            }
        }

        cylinder();
    }
    var timeId=setInterval(time,50)





})();







