/**
 * Created by Administrator on 2016/8/12 0012.
 */
// (function () {
//     var url="http://ucai.cn#a=Hello&b=world";
//     var paramsString=url.substring(url.indexOf("#")+1);
//     var kvStrings=paramsString.split("&");
//     var paramsObject={};
//     for(var i=1;i<kvStrings.length;i++) {
//         var kvString = kvStrings[i];
//         var kvs = kvString.split("=");
//         paramsObject[kvs[0]] = kvs[1];
//     }
//     console.log(paramsObject);
// })();
// (function () {
//     var url="http://ucai.cn#a=Hello&b=world";
//     var p=/\#(.+)\&(.+)/g;
//
//     while (true) {
//         var result = p.exec(url);
//         if (result) {
//             var a=result[1];
//             var b=result[2];
//             console.log(a,b);
//             var paramsObject={};
//             for(var i=0;i<result.length;i++){
//                 var kvsString=result[i];
//                 var kvs=kvsString.split("=");
//                 paramsObject[kvs[0]]=kvs[1];
//             }
//         } else {
//             break;
//         }
//         console.log(paramsObject);
//     }
// })();
// (function () {
//     var url="http://ucai.cn#a=Hello&b=world";
//     var p=/[#&\?]([^=]+)=([^&]+)/g;
//     var obj={};
//     while (true) {
//         var result = p.exec(url);
//         if (result) {
//            obj[result[1]]=result[2];
//         } else {
//             break;
//         }
//     }
//     console.log(obj);
// })();
(function () {

    var div2=document.getElementById("box2");
    var z;
    div2.onmousedown=function(e){
            e=e||window.event;
            var sbX=e.clientX;/*鼠标按下时X坐标*/
            var sbY=e.clientY;/*鼠标按下Y坐标*/
            l=div2.offsetLeft;/*获取DIV2的左移量*/
            t=div2.offsetTop;/*获取DIV2的上移量*/
            z=true;
            document.onmouseover=function over(e){
                e=e||window.event;
                var x=e.clientX;/*鼠标移动时X坐标*/
                var y=e.clientY;/*鼠标移动时Y坐标*/
                if (z==true)
                {
                    div2.style.left=l+(x-sbX)+"px";
                    div2.style.top=t+(y-sbY)+"px";
                }
            }/*鼠标拖拽DIV2*/
            document.onmouseup=function(){
                z=false;
            }/*松开鼠标停止DIV移动*/
        }
})();





























