hit1 = 0;
hit2 = 0;
i = 0;
let img;
let DF;
let P1P;
let P2P;
let mySound;

function preload() {
  img=loadImage('GA.jpg');
  DF=loadImage('FS/DF.png');
  P1P=loadImage('FS/P1P.png');
  P2P=loadImage('FS/P2P.png');
  
  soundFormats('mp3','m4a');
mySound = loadSound('BGMU.mp3');
  
  SE1=loadSound('SE/1.m4a');
  SE2=loadSound('SE/2.m4a');
  SE3=loadSound('SE/3.m4a');
  SE4=loadSound('SE/4.m4a');
  SE5=loadSound('SE/5.m4a');
  SE6=loadSound('SE/6.m4a');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  mySound.setVolume(0.25);
mySound.play();
}


function draw() {
   image(img,0,0,windowWidth,windowHeight);
  textSize(40);
  
  if (i == 0) {
   image(DF,330,130,900,500); 
  }
 if (i == 1) {
   image(P1P,330,130,900,500); 
  }
  if (i == 2) {
   image(P2P,330,130,900,500); 
  }
  
  
  let s = 'Tristan: '+hit1;
fill(255);
text(s, 120, 120);
  
  let p = 'Oskar: '+hit2;
fill(255);
text(p, 1180, 120);

}
function keyPressed(){    
if (keyCode === LEFT_ARROW) {
     hit1 += 1; 
  SoundEffect1(); 
  i=1;
  
    } 
  else if (keyCode === RIGHT_ARROW) {
      hit2 += 1;
    SoundEffect2();
    i=2;
    }
    
  }  
function SoundEffect1(){
    n=round(random(2))+1
    if(n==1){
      SE1.play();
    }
    if(n==2){
      SE2.play();
    }
    if(n==3){
      SE3.play();
    }
}
  function SoundEffect2(){
    n=round(random(2))+1;
    if(n==1){
      SE4.play();
    }
    if(n==2){
      SE5.play(); 
    }
    if(n==3){
      SE6.play();
    }
  }
