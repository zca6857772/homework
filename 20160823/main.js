/**
 * Created by Administrator on 2016/8/23 0023.
 */
(function () {
    var box=document.getElementById("box");
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");

    setInterval(function () {
        var time=new Date();
        var xs=time.getHours();
        var fz=time.getMinutes();
        var mz=time.getSeconds();
        hours.style.transform="rotate("+xs/12*360+"deg)";
        minutes.style.transform="rotate("+fz/60*360+"deg)";
        seconds.style.transform="rotate("+mz/60*360+"deg)";
    },500);


    
    
    
    
    
})();