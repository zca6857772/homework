/**
 * Created by Administrator on 2016/10/11 0011.
 */
(function () {
    var canvas = document.querySelector("#canvas");
    var saveBtn = document.querySelector("#save-btn");
    var resetBtn = document.querySelector("#reset-btn");
    var context = canvas.getContext("2d");
    var storage = localStorage;

    function startDraw() {
        canvas.onmousedown = function (e) {
            context.save();
            var X = e.pageX;
            var Y = e.pageY;
            context.beginPath();
            context.moveTo(X, Y);
            endDraw();
        }
    }

    function endDraw() {
        canvas.onmousemove = function (e) {
            var X = e.pageX;
            var Y = e.pageY;
            context.lineTo(X, Y);
            context.strokeStyle = "blue";
            context.stroke();
            context.restore();
        };
        canvas.onmouseup = function () {
            canvas.onmousemove = "";
        }
    }
    /*保存画布*/
    function saveCanvas() {
        saveBtn.onclick = function () {
            var imgStorage = canvas.toDataURL();
            storage.setItem("data", imgStorage)
        }
    }
    /*重置画布*/
    function resetCanvas() {
        resetBtn.onclick=function () {
            context.clearRect(0,0,600,400);
            storage.setItem("data","")
        }
    }
    window.onload = function () {
            var img = new Image();
            img.src = storage.getItem("data");
            img.onload=function () {
                context.drawImage(img, 0, 0);
            }
    };
    
    
    function init() {
        startDraw();
        saveCanvas();
        resetCanvas();
    }
    init();
})();