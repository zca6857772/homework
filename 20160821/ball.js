/**
 * Created by Administrator on 2016/8/23 0023.
 */
window.ucai = window.ucai || {};

(function () {

    function Ball() {
        this._htmlNode = document.createElement("div");
    }

    var pro=Ball.prototype;

    pro.getHtmlNode=function () {
        this.startBall();
        this.BallStyle();
        this.MoveBall();
        return this._htmlNode;
    };
    pro.BallStyle=function () {
        this._htmlNode.style.width = "50px";
        this._htmlNode.style.height = "50px";
        this._htmlNode.style.background = "black";
        this._htmlNode.style.borderRadius = "50%";
        this._htmlNode.style.position = "absolute";
    };
    pro.startBall=function() {
        var X = Math.floor(Math.random() * 1550);
        var Y = Math.floor(Math.random() * 550);
        this._htmlNode.style.left = X + "px";
        this._htmlNode.style.top = Y + "px";
    };
    pro.MoveBall=function () {
        var startX = parseInt(this._htmlNode.style.left);
        var startY = parseInt(this._htmlNode.style.top);
        var speedX;
        var speedY;
        while (true) {
            speedX = 10 - Math.floor(Math.random() * 21);
            speedY = 10 - Math.floor(Math.random() * 21);
            if (!(speedX==0&&speedY==0))
                break;
        }
        var id=setInterval(function () {
            startX+=speedX;
            startY+=speedY;
            this._htmlNode.style.left = startX + "px";
            this._htmlNode.style.top = startY + "px";
            if((startX <= 0 || startX >= 1550)|| (startY <= 0 || startY >= 550)){
                clearInterval(id);
                this._htmlNode.parentNode.removeChild(this._htmlNode);
            }
        }.bind(this), 20);
    };
    ucai.Ball = Ball;
})();