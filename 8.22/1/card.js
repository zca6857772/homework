/**
 * Created by Administrator on 2016/8/22 0022.
 */
(function () {
    function Rect() {
        this._htmlNode=document.createElement("div");
        this._htmlNode.style.width="200px";
        this._htmlNode.style.height="200px";
        this._htmlNode.style.background="red";
        this._htmlNode.style.margin="5px";
        this._htmlNode.style.float="left";
        this._isRed=true;
        var self=this;
        this._htmlNode.onclick=function () {
            if(self._isRed){
                self.getHtmlNode().style.background="blue";
                self._isRed=false;
            }else{
                self.getHtmlNode().style.background="red";
                self._isRed=true;
            }
        }
    }
    Rect.prototype.getHtmlNode=function () {
        return this._htmlNode;
    };
    window.Rect=Rect;
})();