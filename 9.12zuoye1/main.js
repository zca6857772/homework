/**
 * Created by Administrator on 2016/9/12 0012.
 */
(function () {
    var box = document.getElementById("box");
    var redInput = document.getElementById("redInput");
    var greenInput = document.getElementById("greenInput");
    var blueInput = document.getElementById("blueInput");
    var redNumber = document.getElementById("redNumber");
    var greenNumber = document.getElementById("greenNumber");
    var blueNumber = document.getElementById("blueNumber");
    var redIndex = 100;
    var greenIndex = 110;
    var blueIndex = 110;
    box.style.background = "rgba(" + redIndex + "," + greenIndex + "," + blueIndex + ",1)";
    //
    // function changeColor(colorIndex, colorInput, colorNumber) {
    //     colorInput.addEventListener("mousedown", function () {
    //         this.onmousemove = function () {
    //             colorIndex = colorInput.value;
    //             colorNumber.value = colorIndex;
    //             box.style.background = "rgba(" + colorIndex + "," + colorIndex + "," + colorIndex + ",1)";
    //         }
    //     })
    //
    // }
    // function init() {
    //     changeColor(redIndex, redInput, redNumber);
    //     changeColor(greenIndex, greenInput, greenNumber);
    //     changeColor(blueIndex, blueInput, blueNumber);
    // }
    // init();
    redInput.addEventListener("mousedown",function () {
        this.onmousemove=function () {
            redIndex=redInput.value;
            redNumber.value=redIndex;
            box.style.background="rgba("+redIndex+","+greenIndex+","+blueIndex+",1)";
        };

    })
    greenInput.addEventListener("mousedown",function () {
        this.onmousemove=function () {
            greenIndex=greenInput.value;
            greenNumber.value=greenIndex;
            box.style.background="rgba("+redIndex+","+greenIndex+","+blueIndex+",1)";
        };

    })
    blueInput.addEventListener("mousedown",function () {
        this.onmousemove=function () {
            blueIndex=blueInput.value;
            blueNumber.value=blueIndex;
            box.style.background="rgba("+redIndex+","+greenIndex+","+blueIndex+",1)";
        };

    })
})();
