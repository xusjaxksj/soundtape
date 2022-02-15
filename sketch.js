let myCanvas;
let timer =30;
let bgm;
let pp;
let jf;
let bg;
let jfw;
let ppw;

let jx;
let jy;
let px;
let py;
let d = 110;

let show = true;
let move = true;
let txtshow = true;
let timestart = false;


function preload(){
  pp = loadImage('pp.png');
  jf = loadImage('jf.png');
  bg = loadImage('bg.png');
  jfw = loadImage('jfw.png');
  ppw = loadImage('ppw.png');
  bgm = loadSound('bgm.mp3');
  
}

function centerCanvas()  {
  let cx = windowWidth/2 - width/2;
  let cy = windowHeight/2 - height/2;
  myCanvas.position(cx,cy);
}

function setup() {
  bgm.play();
  frameRate(30);
  myCanvas = createCanvas(960, 540);
  centerCanvas();
  
  jx = 0;
  jy = 0;
  px = 880;
  py = 440;
  
}

function draw() {
  background(255);
  
  if(show == true){
    image(bg,0,0);
  }
  
  fill(0);
  noStroke();
  textStyle(NORMAL);
  textAlign(CENTER, TOP);
  textSize(50);
  text(timer+'s', width/2, 10);
  
  fill(255);
  stroke(0);
  strokeWeight(3);
  textStyle(BOLD);
  textAlign(RIGHT, TOP);
  textSize(30);
  text('水母 WASD', 400, 15);
  
  textAlign(LEFT, TOP);
  textSize(30);
  text('人類 方向鍵', 560, 15);
  if(txtshow == true){
    fill(255, 92, 138);
    stroke(255);
    textAlign(LEFT, TOP);
    textSize(40);
    text('按一下滑鼠左鍵開始遊戲', 255, 250);
  }
  
  
  if(show == true){
    image(pp,px,py);
    image(jf,jx,jy);
  }

  
  if(abs(jx-px)<=20 && abs(py-jy)<=20){
    timer = 0;
    bgm.stop();
    move = false;
    show = false;
    imageMode(CENTER);
    image(jfw,width/2,height/2);
    fill(255, 255, 100);
    stroke(0);
    textAlign(LEFT, TOP);
    textSize(40);
    text('按F5重新開始遊戲', 325, 500);
  }
  
  if(timestart == true){
    if (frameCount % 30 == 0 && timer > 0) { 
      timer --;
  }
  
  }
  // if (timer == 0) {
  //   bgm.stop();
  //   move = false;
  //   show = false;
  //   imageMode(CENTER);
  //   image(ppw,width/2,height/2);
  // }
  
  if(frameCount >= 900){
     bgm.stop();
     move = false;
     show = false;
     imageMode(CENTER);
     image(ppw,width/2,height/2);
     fill(255, 255, 100);
     stroke(0);
     textAlign(LEFT, TOP);
     textSize(40);
     text('按F5重新開始遊戲', 325, 500);
   }


}

function keyTyped(){
  if(move == true){
    
    if(key === 'w'){
      if(jx == 550 && jy == 330){
        jy -= 0;
      }
      else if(jx == 110 && jy == 440){
        jy -= 0;
      }
      else if(jx == 330 && jy == 440){
        jy -= 0;
      }
      else if(jx == 110 && jy == 110){
        jy -= 0;
      }
      else if(jx == 220 && jy == 110){
        jy -= 0;
      }
      else if(jx == 770 && jy == 110){
        jy -= 0;
      }
      else if(jx == 220 && jy == 440){
        jy -= 0;
      }
      else if(jx == 660 && jy == 330){
        jy -= 0;
      }
      // else if(jx == 660 && jy == 440){
      //   jy -= 0;
      // }
      else if(jx == 770 && jy == 440){
        jy -= 0;
      }
      else if(jy>0){
        jy -= d;
      }
    }
    
    if(key === 's'){
      if(jx == 550 && jy == 220){
        jy += 0;
      }
      else if(jx == 110 && jy == 330){
        jy += 0;
      }
      else if(jx == 330 && jy == 330){
        jy += 0;
      }
      else if(jx == 110 && jy == 0){
        jy += 0;
      }
      else if(jx == 220 && jy == 0){
        jy += 0;
      }
      else if(jx == 770 && jy == 0){
        jy += 0;
      }
      else if(jx == 220 && jy == 330){
        jy += 0;
      }
      else if(jx == 660 && jy == 220){
        jy += 0;
      }
      // else if(jx == 660 && jy == 330){
      //   jy += 0;
      // }
      else if(jx == 770 && jy == 330){
        jy += 0;
      }
      else if(jy<440){
        jy += d;
      }
    }
    
    if(key === 'a'){
      if(jx == 660 && jy == 0){
        jx -= 0;
      }
      else if(jx == 330 && jy == 220){
        jx -= 0;
      }
      else if(jx == 550 && jy == 220){
        jx -= 0;
      }
      else if(jx == 440 && jy == 330){
        jx -= 0;
      }
      else if(jx == 550 && jy == 440){
        jx -= 0;
      }
      else if(jx == 330 && jy == 110){
        jx -= 0;
      }
      else if(jx == 440 && jy == 110){
        jx -= 0;
      }
      else if(jx == 550 && jy == 110){
        jx -= 0;
      }
      else if(jx == 660 && jy == 110){
        jx -= 0;
      }
      else if(jx == 770 && jy == 110){
        jx -= 0;
      }
      else if(jx == 110 && jy == 220){
        jx -= 0;
      }
      else if(jx == 220 && jy == 220){
        jx -= 0;
      }
      else if(jx == 110 && jy == 330){
        jx -= 0;
      }
      else if(jx == 880 && jy == 220){
        jx -= 0;
      }
      else if(jx>0){
        jx -= d;
      }
    }
    
    if(key === 'd'){
      if(jx == 550 && jy == 0){
        jx += 0;
      }
      else if(jx == 220 && jy == 220){
        jx += 0;
      }
      else if(jx == 440 && jy == 220){
        jx += 0;
      }
      else if(jx == 330 && jy == 330){
        jx += 0;
      }
      else if(jx == 440 && jy == 440){
        jx += 0;
      }
      else if(jx == 220 && jy == 110){
        jx += 0;
      }
      else if(jx == 330 && jy == 110){
        jx += 0;
      }
      else if(jx == 440 && jy == 110){
        jx += 0;
      }
      else if(jx == 550 && jy == 110){
        jx += 0;
      }
      else if(jx == 660 && jy == 110){
        jx += 0;
      }
      else if(jx == 0 && jy == 220){
        jx += 0;
      }
      else if(jx == 110 && jy == 220){
        jx += 0;
      }
      else if(jx == 0 && jy == 330){
        jx += 0;
      }
      else if(jx == 770 && jy == 220){
        jx += 0;
      }
      else if(jx<880){
        jx += d;
      }
    }
    
  } 
}

function keyPressed() {
  if(move == true){
    
    if(keyCode === UP_ARROW){
      if(px == 550 && py == 330){
        py -= 0;
      }
      else if(px == 110 && py == 440){
        py -= 0;
      }
      else if(px == 330 && py == 440){
        py -= 0;
      }
      else if(px == 110 && py == 110){
        py -= 0;
      }
      else if(px == 220 && py == 110){
        py -= 0;
      }
      else if(px == 770 && py == 110){
        py -= 0;
      }
      else if(px == 220 && py == 440){
        py -= 0;
      }
      else if(px == 660 && py == 330){
        py -= 0;
      }
      // else if(px == 660 && py == 440){
      //   py -= 0;
      // }
      else if(px == 770 && py == 440){
        py -= 0;
      }
      else if(py>0){
        py -= d;
      }
    }
    
    if(keyCode === DOWN_ARROW){
      if(px == 550 && py == 220){
        py += 0;
      }
      else if(px == 110 && py == 330){
        py += 0;
      }
      else if(px == 330 && py == 330){
        py += 0;
      }
      else if(px == 110 && py == 0){
        py += 0;
      }
      else if(px == 220 && py == 0){
        py += 0;
      }
      else if(px == 770 && py == 0){
        py += 0;
      }
      else if(px == 220 && py == 330){
        py += 0;
      }
      else if(px == 660 && py == 220){
        py += 0;
      }
      // else if(px == 660 && py == 330){
      //   py += 0;
      // }
      else if(px == 770 && py == 330){
        py += 0;
      }
      else if(py<440){
        py += d;
      }
    }
    
    if(keyCode === LEFT_ARROW){
      if(px == 660 && py == 0){
        px -= 0;
      }
      else if(px == 330 && py == 220){
        px -= 0;
      }
      else if(px == 550 && py == 220){
        px -= 0;
      }
      else if(px == 440 && py == 330){
        px -= 0;
      }
      else if(px == 550 && py == 440){
        px -= 0;
      }
      else if(px == 330 && py == 110){
        px -= 0;
      }
      else if(px == 440 && py == 110){
        px -= 0;
      }
      else if(px == 550 && py == 110){
        px -= 0;
      }
      else if(px == 660 && py == 110){
        px -= 0;
      }
      else if(px == 770 && py == 110){
        px -= 0;
      }
      else if(px == 110 && py == 220){
        px -= 0;
      }
      else if(px == 220 && py == 220){
        px -= 0;
      }
      else if(px == 110 && py == 330){
        px -= 0;
      }
      else if(px == 880 && py == 220){
        px -= 0;
      }
      else if(px>0){
        px -= d;
      }
    }
    
    if(keyCode === RIGHT_ARROW){
      if(px == 550 && py == 0){
        px += 0;
      }
      else if(px == 220 && py == 220){
        px += 0;
      }
      else if(px == 440 && py == 220){
        px += 0;
      }
      else if(px == 330 && py == 330){
        px += 0;
      }
      else if(px == 440 && py == 440){
        px += 0;
      }
      else if(px == 220 && py == 110){
        px += 0;
      }
      else if(px == 330 && py == 110){
        px += 0;
      }
      else if(px == 440 && py == 110){
        px += 0;
      }
      else if(px == 550 && py == 110){
        px += 0;
      }
      else if(px == 660 && py == 110){
        px += 0;
      }
      else if(px == 0 && py == 220){
        px += 0;
      }
      else if(px == 110 && py == 220){
        px += 0;
      }
      else if(px == 0 && py == 330){
        px += 0;
      }
      else if(px == 770 && py == 220){
        px += 0;
      }
      else if(px<880){
        px += d;
      }  
    }
    
  }
}


function touchStarted() {
  txtshow = false;
  timestart = true;
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  
}

function windowResized() {
  centerCanvas();
}
