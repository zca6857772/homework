/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var myCanvas=document.getElementById("myCanvas");
    var zca=myCanvas.getContext("2d");

    zca.beginPath();
    zca.fillStyle="#cd2e3e";
    zca.arc(250,250,200,0,2*Math.PI,true);
    zca.fill();
    zca.closePath();

    zca.save();
    zca.beginPath();
    zca.fillStyle="#ffffff";
    zca.arc(250,250,170,0,2*Math.PI,true);
    zca.fill();
    zca.closePath();
    zca.restore();

    zca.save();
    zca.beginPath();
    zca.fillStyle="#cd2e3e";
    zca.arc(250,250,140,0,2*Math.PI,true);
    zca.fill();
    zca.closePath();
    zca.restore();

    zca.save();
    zca.beginPath();
    zca.fillStyle="#02468d";
    zca.arc(250,250,110,0,2*Math.PI,true);
    zca.fill();
    zca.closePath();
    zca.restore();

    zca.save();
    zca.beginPath();
    for (var i = 0; i < 6; i ++ ) {
        var ox = 110 * Math.cos(i * 72*2 * Math.PI / 180 - Math.PI / 2) + 250;
        var oy = 110 * Math.sin(i * 72*2 * Math.PI / 180 - Math.PI / 2) + 250;
        zca.lineTo(ox, oy);
    }
    zca.closePath();
    zca.fillStyle="#ffffff";
    zca.fill();
    zca.closePath();
    zca.restore();






















})();