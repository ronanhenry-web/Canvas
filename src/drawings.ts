export function drawing01(canvas, context) {
  let side: number = 50;
  let margin: number = 10;

  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(margin, margin, side, side);
  context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(margin*7, margin, side, side);
  context.fillStyle = "rgb(0, 0, 255)";
  context.fillRect(margin*13, margin, side, side);
}

export function drawing02(canvas, context) {
  let width: number = canvas.width;
  let height: number = canvas.height;
  let margin: number = 10;


  //context.fillStyle = "rgb(255,0,0)";
  //context.fillRect (margin,margin,(760/3),580)
  //context.fillStyle = "rgb(0,255,0)";
  //context.fillRect (margin*2+(760/3),margin,(760/3),580)
  //context.fillStyle = "rgb(0,0,255)";
  //context.fillRect (margin*3+(760/3)*2,margin,(760/3),580)
  context.fillStyle = "rgb(255,0,0)";
  context.fillRect (margin,margin,(width-margin*4)/3,height - margin*2)
  context.fillStyle = "rgb(0,255,0)";
  context.fillRect (margin*2 + (width-margin*4)/3,margin,(width-margin*4)/3,height - margin*2)
  context.fillStyle = "rgb(0,0,255)";
  context.fillRect (margin*3 + ((width-margin*4)/3)*2 ,margin,(width-margin*4)/3,height - margin*2)
}

export function drawing03(canvas, context) {
  let width : number = canvas.width;
  let height : number = canvas.height;
  let margin : number = 10;

  context.fillStyle = "rgb(255,0,0)";
  context.fillRect (margin, margin,width-margin*2,(height-4*margin)/3);
  context.fillStyle = "rgb(0,255,0)";
  context.fillRect (margin, margin*2+ (height-4*margin)/3,width-margin*2,(height-4*margin)/3);
  context.fillStyle = "rgb(0,0,255)";
  context.fillRect (margin, margin*3+((height-4*margin)/3)*2,width-margin*2,(height-4*margin)/3);

  //context.fillStyle = "rgb(255,0,0)";
  //context.fillRect (margin,margin,780,(560/3))
  //context.fillStyle = "rgb(0,255,0)";
  //context.fillRect (margin,margin*2+(560/3),780,(560/3))
  //context.fillStyle = "rgb(0,0,255)";
  //context.fillRect (margin,margin*3+(560/3)*2,780,(560/3))

}

export function drawing04(canvas, context) {
  let width: number = canvas.width;
  let height: number = canvas.height;

  let side: number = 150;
  let triangleHeight: number = (side * Math.sqrt(3)) / 2;
  let center: number[] = [width / 2, height / 2];
  let a: number[] = [center[0] - side / 2, center[1] + triangleHeight / 3];
  let b: number[] = [center[0] + side / 2, center[1] + triangleHeight / 3];
  let c: number[] = [center[0], center[1] - (triangleHeight * 2) / 3];


  let radius: number = 100;

  context.beginPath();
  context.fillStyle = "rgba(255,0,0,0.5)";
  context.arc(a[0],a[1],radius,0,2*Math.PI,true);
  context.fill("evenodd");
  context.beginPath();
  context.fillStyle = "rgba(0,255,0,0.5)";
  context.arc(b[0],b[1],radius,0,2*Math.PI,true);
  context.fill("evenodd");
  context.beginPath();
  context.fillStyle = "rgba(0,0,255,0.5)";
  context.arc(c[0],c[1],radius,0,2*Math.PI,true);
  context.fill("evenodd");
}

export function drawing05(canvas, context) {
  let side: number = 300;
  let width: number = canvas.width;
  let height: number = canvas.height;
  let center: number[] = [width / 2, height / 2];
  let triangleHeight: number = ((side * Math.sqrt(3)) / 2);


let a: number[] = [center[0] - side / 2, center[1] + triangleHeight / 3];
let b: number[] = [center[0] + side / 2, center[1] + triangleHeight / 3];
let c: number[] = [center[0], center[1] - (triangleHeight * 2) / 3];


  context.beginPath();
  context.fillStyle = "#d4ce46";
  context.moveTo(a[0],a[1]);
  context.lineTo(c[0],c[1]);
  context.lineTo(b[0],b[1]);
  context.lineTo(a[0],a[1]);
  context.lineTo((c[0]-a[0])/2+a[0],(a[1]-c[1]));
  context.lineTo((b[0]-c[0])/2+c[0],(b[1]-c[1]));
  context.lineTo(a[0]+side/2,center[1]+triangleHeight/3);
  context.lineTo((c[0]-a[0])/2+a[0],(a[1]-c[1]))
  context.fill("evenodd");

}

export function drawing06(canvas, context) {
  let rectWidth: number = 40;
  let lightColor: string = "#f4f4f6";
  let darkColor: string = "#adc8d2";
  for (let i:number = 0;i*rectWidth<canvas.width;i++){
    if (i % 2 == 0) {
      context.fillStyle = lightColor;
      context.fillRect(i*rectWidth,0,rectWidth,canvas.height)
    }else if (i % 2 == 1) {
        context.fillStyle = darkColor;
        context.fillRect(i*rectWidth,0,rectWidth,canvas.height)
    }
  }
}

export function drawing07(canvas, context) {
  let rectWidth: number = 40;

  let colorStart: number[] = [244, 244, 246];
  let colorEnd: number[] = [173, 200, 210];

  let steps: number[] = [0, 0, 0];

  for (let i: number = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / (canvas.width / rectWidth);
  }
  for (let i:number = 0; i * rectWidth <= canvas.width;i++){
    let couleurRectanglesX: number = colorStart[0]+steps[0]*i;
    let couleurRectanglesY: number = colorStart[1]+steps[1]*i;
    let couleurRectanglesZ: number = colorStart[2]+steps[2]*i;
    context.fillStyle = "rgb("+couleurRectanglesX+","+couleurRectanglesY+","+couleurRectanglesZ+")";
    //console.log(couleurRectanglesX);
    //console.log(couleurRectanglesY);
    //console.log(couleurRectanglesZ);


    context.fillRect(i*rectWidth,0,rectWidth,canvas.height);
  }
}

export function drawing08(canvas, context) {
  let width: number = canvas.width;
  let height: number = canvas.height;
  let colorStart: number[] = [244, 244, 246];
  let colorEnd: number[] = [173, 200, 210];

  let nbRectangles: number = 10;

  let steps: number[] = [0, 0, 0];

  for (let i: number = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / nbRectangles ;
}
  for (let i = 0; i < nbRectangles ; i++) {
    let couleurRectanglesX: number = colorStart[0]+steps[0]*i;
    let couleurRectanglesY: number = colorStart[1]+steps[1]*i;
    let couleurRectanglesZ: number = colorStart[2]+steps[2]*i;
    context.fillStyle = "rgb("+couleurRectanglesX+","+couleurRectanglesY+","+couleurRectanglesZ+")";
    context.fillRect(0,(canvas.height/nbRectangles)*i,canvas.width-(canvas.width/nbRectangles)*i,canvas.height-(canvas.height/nbRectangles)*i);
    console.log(0,(canvas.height/nbRectangles)*i,canvas.width-(canvas.width/nbRectangles)*i,canvas.height-(canvas.height/nbRectangles)*i)
  }
}

export function drawing09(canvas, context) {

  let center: number[] = [canvas.width / 2, canvas.height / 2];
  let radius: number = 200;
  let nbSteps: number = 20;
  let colorStart: number[] = [244, 244, 246];
  let colorEnd: number[] = [173, 200, 210];
  let steps: number[] = [0, 0, 0];

  for (let i: number = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / nbSteps ;
  }
console.log(steps);

    for (let i = 20; i > 0; i--) {
      let couleurRectanglesX: number = colorStart[0]+steps[0]*i;
      let couleurRectanglesY: number = colorStart[1]+steps[1]*i;
      let couleurRectanglesZ: number = colorStart[2]+steps[2]*i;
      context.fillStyle = "rgb("+couleurRectanglesX+","+couleurRectanglesY+","+couleurRectanglesZ+")";
      context.beginPath();
      context.arc(center[0],center[1],radius,2*Math.PI/(20)*i,0*Math.PI,true);
      context.lineTo(center[0],center[1])
      context.fill();
  }
}

export function drawing10(canvas, context) {
  let center: number[] = [canvas.width / 2, canvas.height / 2];
  let pokeballRadius: number = 200;
  let externalRadius: number = 50;
  let internalRadius: number = 30;

  let pokeballRedColor: string = "#ee343c";
  let pokeballStrokeColor: string = "#171013";

  context.beginPath();
  context.lineWidth = 10;
  context.arc(center[0],center[1],pokeballRadius,Math.PI , 2 * Math.PI);
  context.lineTo(2*pokeballRadius+externalRadius,center[1])
  context.arc(center[0],center[1],externalRadius,0,Math.PI, true);
  context.lineTo(pokeballRadius,center[1]);
  context.fillStyle = pokeballRedColor;
  context.fill();
  context.stroke();


  context.beginPath();
  context.lineWidth = 10;
  context.arc(center[0],center[1],pokeballRadius,0 ,Math.PI,false);
  context.moveTo(pokeballRadius,center[1] )
  context.lineTo(center[0]-externalRadius,center[1]);
  context.arc(center[0],center[1],externalRadius, Math.PI,0, true);
  context.lineTo(3*pokeballRadius,center[1]);
  context.stroke();


  context.beginPath();
  context.lineWidth = 5;
  context.arc(center[0],center[1],internalRadius,0,2*Math.PI);
  context.stroke();


  context.beginPath();
  context.moveTo(pokeballRadius,center[1]);
  context.lineTo(center[0]-externalRadius,center[1]);
  context.arc(center[0],center[1],externalRadius,Math.PI,0, false);
  context.moveTo(center[0]-externalRadius,center[1]);
  context.arc(center[0],center[1],externalRadius,Math.PI,0,true);
  context.lineTo(3*pokeballRadius,center[1]);
  context.lineWidth = 15;
  context.stroke();
}




export function drawing11(canvas, context) {
  let side: number = 20;
  let lightColor: string = "#f4f4f6";
  let darkColor: string = "#adc8d2";

for(let j: number = 0; j*side< canvas.height;j++){
  for (let i: number = 0;i*side< canvas.width ;i++){
      if (i % 2 == 0  && j % 2 == 0) {
        context.fillStyle = lightColor;
        context.fillRect(i*side,j*side,side,side);
      }else if (i % 2== 1 && j % 2 == 0){
        context.fillStyle = darkColor;
        context.fillRect(i*side,j*side,side,side);
      }else if (i % 2==0 && j % 2 == 1){
        context.fillStyle = darkColor;
        context.fillRect(i*side,j*side,side,side);
      }else {
        context.fillStyle = lightColor;
        context.fillRect(i*side,j*side,side,side);
      }
    }
  }
}



export function drawing12(canvas, context) {
  let side: number = 40;
  let redGreenSteps: number[] = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  let blueColor: number = 255;

  for(let j: number = 0; j*side< canvas.height;j++){
    for (let i: number = 0;i*side< canvas.width ;i++){
      context.fillStyle = "rgb("+redGreenSteps[0]*i+","+redGreenSteps[1]*j+","+blueColor+")"
      context.fillRect(side*i,side*j,side,side);
}
}
}

export function drawing13(canvas, context) {
  let side: number = 40;
  let redGreenSteps: number[] = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  let blueColor: number = 255;
  let arcSteps = [Math.PI / (canvas.width / side),Math.PI / (canvas.height / side)];

      for(let j: number = 0; j*side< canvas.height;j++){
        for (let i: number = 0;i*side< canvas.width ;i++){
      context.fillStyle = "rgb("+redGreenSteps[0]*i+","+redGreenSteps[1]*j+","+blueColor+")"
      context.beginPath();
      context.arc(side*i+side/2,side*j+side/2,canvas.width/50,arcSteps[1]*(j),arcSteps[0]*(-i),true)
      context.fill();
      //context.beginPath();
      //context.arc(50,50,200,0,Math.PI,false)
      //context.fill();
}
}
}
export function drawing14(canvas, context) {
  let side: number = 100;
  let radius: number = 10;
  let lightColor: string = "#f4f4f6";
  let darkColor: string = "#adc8d2";

  for(let j: number = 0; j*side< canvas.height;j++){
    for (let i: number = 0;i*side< canvas.width ;i++){

        if (i % 2 == 0  && j % 2 == 0) {
          context.fillStyle = lightColor;
          context.fillRect(i*side,j*side,side,side);

        } else if (i % 2== 1 && j % 2 == 0){
          context.fillStyle = darkColor;
          context.fillRect(i*side,j*side,side,side);
        } else if (i % 2 == 0 && j % 2 == 1){
          context.fillStyle = darkColor;
          context.fillRect(i*side,j*side,side,side);
        } else {
          context.fillStyle = lightColor;
          context.fillRect(i*side,j*side,side,side);
        }
      }
    }
  }

export function drawing15(canvas, context) {

}