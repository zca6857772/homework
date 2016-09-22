/**
 * Created by Administrator on 2016/9/21 0021.
 */
/*自己敲的自动效果*/
// (function () {
//     var content=document.getElementById("content");
//     var arrAngle=[0,90,180,270];
//     var arrUrl=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
//     var arrTime=[100,200,300,400,500,600,700,800,900,1000];
//     var indexX=35;
//     var indexY=-220;
//     var a = document.querySelectorAll("a");
//     function CreateDiv() {
//         for (var i = 0; i < arrTime.length; i++) {
//             var fatherDiv = document.createElement("div");
//             fatherDiv.style.width = "35px";
//             fatherDiv.style.height = "220px";
//             fatherDiv.style.position = "relative";
//             fatherDiv.style.left = indexX*i+"px";
//             fatherDiv.style.top = indexY*i+"px";
//             fatherDiv.style.transformStyle = "preserve-3d";
//             fatherDiv.style.animation = "zzz 5s "+arrTime[i]+"ms linear infinite";
//             content.appendChild(fatherDiv);
//             for(var j=0;j<arrUrl.length;j++){
//                 var divChild = document.createElement("div");
//                 divChild.style.width = "35px";
//                 divChild.style.height = "220px";
//                 divChild.style.position = "absolute";
//                 divChild.style.transform = "rotateX("+arrAngle[j]+"deg) translateZ(110px)";
//                 divChild.style.background = 'url('+arrUrl[j]+') '+-35*i+'px 0';
//                 fatherDiv.appendChild(divChild);
//             }
//         }
//     }
// })();


/*照着敲 加点击效果*/
(function () {
    var imgArr = [ "url('images/1.jpg')" , "url('images/2.jpg')" , "url('images/3.jpg')" , "url('images/4.jpg')" ];
    var divContent = document.querySelectorAll(".content");
    var a = document.querySelectorAll("a");
    var nextIndex = 1,id;
/*写10个DIV到li标签里面，已经写好每个DIV的4个面*/
    function setPIC(index) {
        for(var i=0;i<10;i++) {
            var div = document.createElement("div");
            div.style.backgroundImage = imgArr[index];
            div.style.backgroundPosition = -35*i + "px 0";
            div.style.transform = "rotateX("+90*index+"deg)";
            divContent[i].appendChild(div);
        }
    }
    /*每次转动90度，转动花费66ms*/
    function play(index) {
        autoPlay();
        nextIndex = (index+1)%4;
        for (var i=0;i<10;i++) {
            (function (i) {
                setTimeout(function () {
                    divContent[i].style.transform = "rotateX("+index*90+"deg)";
                },i*66);
            })(i);
        }
    }
    /*给4个A标签加点击事件*/
    for (var i=0;i<4;i++) {
        a[i].onclick = function () {
            play(this.innerHTML);
        }
    }
    /*计时器 去运行每次转动 注意 每次要先清除定时器*/
    function autoPlay() {
        id && clearInterval(id);
        id = setInterval(function () {
            play(nextIndex);
        },2000)
    }
    /*传人参数*/
    setPIC(0);
    setPIC(1);
    setPIC(2);
    setPIC(3);
    autoPlay();

})();





















