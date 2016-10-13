/**
 * Created by Administrator on 2016/10/13 0013.
 */
(function () {
    var target = document.querySelector("#target");
    var audio = document.querySelector("#audio");
    target.addEventListener("dragover", function (e) {
        e.preventDefault();
    });
    target.addEventListener("drop", function (e) {
        e.preventDefault();
        var files = e.dataTransfer.files;
        var reader;
        if (files && files.length) {
            var file = files[0];
            switch (file.type) {
                case "text/plain":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = reader.result;
                    };
                    reader.readAsText(file);
                    /*读成TEXT*/
                    break;
                case "image/jpeg":
                    reader = new FileReader();
                    reader.onload = function () {
                        target.innerHTML = "<img src='" + reader.result + "'>";
                    };
                    reader.readAsDataURL(file);
                    /*发读成IMG*/
                    break;
                case "audio/mp3":
                    reader=new FileReader();
                    var playMp3=document.createElement("div");
                    playMp3.innerHTML=file.name;
                    target.appendChild(playMp3);
                    reader.onload=function () {
                        playMp3.onclick=function () {
                            audio.src=reader.result;
                        }
                    };
                    reader.readAsDataURL(file);
                    break;
                default:
                    break;
            }
        }
    })
})();