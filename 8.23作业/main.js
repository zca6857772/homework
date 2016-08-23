/**
 * Created by Administrator on 2016/8/23 0023.
 */

(function () {
    var box = document.getElementById("box");
    function getMoreBall(Num) {
        for (var i=0;i<Num;i++) {
            var ball = new ucai.Ball();
            box.appendChild(ball.getHtmlNode());
        }
    }
    getMoreBall(50);

})();
