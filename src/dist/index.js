import * as drawings from "./drawings";
import * as expected from "./expected";
var drawingCvs = document.getElementById("drawing");
var expectedCvs = document.getElementById("expected");
var drawingCtx = drawingCvs.getContext("2d");
var expectedCtx = expectedCvs.getContext("2d");
var buttons = document.getElementById("buttons");
var NB_DRAWINGS = 15;
var buttonsString = "";
for (var i = 1; i <= NB_DRAWINGS; i++) {
    buttonsString += "<button id=\"" + i + "\" >Dessin n\u00B0" + i + "</button>";
}
var doubleDigitsFormat = new Intl.NumberFormat("en-IN", {
    minimumIntegerDigits: 2,
});
buttons.innerHTML = buttonsString;
var _loop_1 = function (i) {
    document.getElementById("" + i).onclick = function () {
        eraseCanvas();
        drawings["drawing" + doubleDigitsFormat.format(i)].apply(this, [
            drawingCvs,
            drawingCtx,
        ]);
        expected["drawing" + doubleDigitsFormat.format(i)].apply(this, [
            expectedCvs,
            expectedCtx,
        ]);
    };
};
for (var i = 1; i < NB_DRAWINGS; i++) {
    _loop_1(i);
}
document.getElementById("15").onclick = function () {
    eraseCanvas();
    drawings.drawing15(drawingCvs, drawingCtx);
    drawings.drawing15(expectedCvs, expectedCtx);
};
function eraseCanvas() {
    drawingCtx.clearRect(0, 0, drawingCvs.width, drawingCvs.height);
    expectedCtx.clearRect(0, 0, expectedCvs.width, expectedCvs.height);
}
