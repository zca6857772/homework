/**
 * Created by Administrator on 2016/8/22 0022.
 */
(function () {
    // var city={mynName:"棒槌"};
    // function sayHello() {
    //     console.log("你好,"+this.mynName);
    // }
    // sayHello.call(city);/*等价于city的this*/
var btn=document.createElement("button");
    btn.innerHTML="Click me";
    document.body.appendChild(btn);
    // btn.onclick=function (e) {
    //     console.log(this);
    // }
    btn.addEventListener("click",function (e) {
        console.log(this);
    });










})();