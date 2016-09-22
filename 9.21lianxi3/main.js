/**
 * Created by Administrator on 2016/9/21 0021.
 */
(function () {
    var other=document.getElementById("banner");
    var oul=document.getElementsByClassName("banner_img")[0];
    var btns=document.getElementsByClassName("btns")[0].getElementsByTagName("li");
    var change=document.getElementsByClassName()
    
    
    function banner(other,oul,btns,change,changetime,banwid) {
        var time;
        var time1;
        var index=0;
        var maxindex=btns.length;
        function move() {
            index++;
            if(index> maxindex){
                oul.style.transition="";
                oul.style.left="0";
                index=0;
                time1=setTimeout(function () {
                    oul.style.transition="all 1s linear";
                },10)
            }
            oul.style.left=index*(-banwid)+"px";
        }
     
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();