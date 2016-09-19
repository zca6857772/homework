/**
 * Created by Administrator on 2016/9/13 0013.
 */
(function () {
    var myCanvas=document.getElementById("myCanvas");
    var zca=myCanvas.getContext("2d");

    function Captain(color,R) {
        zca.beginPath();
        zca.fillStyle=color;
        zca.arc(250,250,R,0,2*Math.PI,true);
        zca.fill();
        zca.closePath();
    }
    Captain("#cd2e3e",200);
    Captain("#ffffff",170);
    Captain("#cd2e3e",140);
    Captain("#02468d",110);

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