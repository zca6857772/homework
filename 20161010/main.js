/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {
    var canvas1=document.getElementById("canvas1");
    var canvas2=document.getElementById("canvas2");
    var canvas3=document.getElementById("canvas3");
    var camera=document.getElementById("camera");
    var photograph=document.getElementById("photograph");
    var context1=canvas1.getContext("2d");
    var context2=canvas2.getContext("2d");
    var context3=canvas3.getContext("2d");
    var video,isOpen,img1;
    var id;
    var maskX=200;
    var maskY=100;
    context2.globalAlpha = 0.4;
    function createVideo() {
        video = document.createElement("video");
        video.autoplay = true;
    }
    function openCamera() {
        navigator.mediaDevices.getUserMedia({
            audio:false,video:true
        }).then(function (result) {
            video.srcObject=result;
        }).catch(function (error) {
            // console.log(error);
        });
    }
    function render() {
        context1.drawImage(video,0,0);
        id=requestAnimationFrame(render)
    }

    function addEventListener() {
        camera.addEventListener("click",function () {
            context2.clearRect(0,0,600,400);
            startVideo();
        });
        photograph.addEventListener("click",function () {
            cancelAnimationFrame(id);
            isOpen=false;
            img1=context1.getImageData(0,0,600,400);
            setMask(maskX,maskY);
            context3.putImageData(img1,-maskX,-maskY)
        });
        canvas2.addEventListener("mousedown",function (e) {
            if (!isOpen) {
                var startX = e.offsetX, startY = e.offsetY;
                if (startX >= maskX && startX <= maskX + 200 && startY >= maskY && startY <= maskY + 200) {
                    canvas2.onmousemove = function (ev) {
                        var dx = startX - ev.offsetX, dy = startY - ev.offsetY;
                        var nx = maskX - dx,ny = maskY - dy;
                        nx < 0 && (nx=0);nx>400&&(nx = 400);
                        ny < 0 && (ny=0);ny>200&&(ny = 200);
                        setMask(nx, ny);
                        context3.clearRect(0, 0, 200, 200);
                        context3.putImageData(img1,-nx,-ny);
                        canvas2.onmouseup = function () {
                            canvas2.onmousemove = "";
                            maskX -= dx, maskY -= dy;
                            dx=dy=0;
                        }
                    }
                }
            }
        })
    }
    
    function startVideo() {
        if(!isOpen){
            isOpen=true;
            openCamera();
            render();
            
        }
    }
    function setMask(x,y) {
        context2.clearRect(0,0,600,400);
        context2.fillRect(0,0,600,400);
        context2.clearRect(x,y,200,200);
    }
  
    function init() {
        createVideo();
        addEventListener();
    }
    init();
})();