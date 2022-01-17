export function drawing01(canvas, context) {
    var side = 50;
    var margin = 10;
    context.fillStyle = "rgb(255, 0, 0)";
    context.fillRect(margin, margin, side, side);
}
export function drawing02(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var margin = 10;
}
export function drawing03(canvas, context) {
}
export function drawing04(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var side = 150;
    var triangleHeight = (width * Math.sqrt(3)) / 2;
    var center = [width / 2, height / 2];
    var a = [center[0] - width / 2, center[1] + triangleHeight / 3];
    var b = [center[0] + width / 2, center[1] + triangleHeight / 3];
    var c = [center[0], center[1] - (triangleHeight * 2) / 3];
    var radius = 100;
}
export function drawing05(canvas, context) {
    var side = 300;
    context.fillStyle = "#d4ce46";
}
export function drawing06(canvas, context) {
    var rectWidth = 40;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
}
export function drawing07(canvas, context) {
    var rectWidth = 40;
    var colorStart = [244, 244, 246];
    var colorEnd = [173, 200, 210];
    var steps = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        steps[i] = (colorEnd[i] - colorStart[i]) / (canvas.width / rectWidth);
    }
}
export function drawing08(canvas, context) {
    var width = canvas.width;
    var height = canvas.height;
    var nbRectangles = 10;
    var colorStart = [244, 244, 246];
    var colorEnd = [173, 200, 210];
}
export function drawing09(canvas, context) {
    var center = [canvas.width / 2, canvas.height / 2];
    var radius = 200;
    var nbSteps = 20;
    var colorStart = [244, 244, 246];
    var colorEnd = [173, 200, 210];
}
export function drawing10(canvas, context) {
    var center = [canvas.width / 2, canvas.height / 2];
    var pokeballRadius = 200;
    var externalRadius = 50;
    var internalRadius = 30;
    var pokeballRedColor = "#ee343c";
    var pokeballStrokeColor = "#171013";
}
export function drawing11(canvas, context) {
    var side = 20;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
}
export function drawing12(canvas, context) {
    var side = 40;
    var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
    var blueColor = 255;
}
export function drawing13(canvas, context) {
    var side = 40;
    var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
    var blueColor = 255;
    var arcSteps = [
        Math.PI / (canvas.width / side),
        Math.PI / (canvas.height / side),
    ];
}
export function drawing14(canvas, context) {
    var side = 100;
    var radius = 10;
    var lightColor = "#f4f4f6";
    var darkColor = "#adc8d2";
}
export function drawing15(canvas, context) {
}
