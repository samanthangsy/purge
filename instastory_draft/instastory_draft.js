/*Code created by Karen Donnachie 28th September 2020
Modified by Bridie O'Toole*/
//referenced by Samantha Ng

var font;
var points1 = [];
var margin = 50;
var topMargin = 50;
var para = 'PREMISE: TAN JIA HUI (ALEXIS) GETS HER HEART BROKEN AND FINDS HERSELF A REBOUND via instagram stories / You ruined Christmas for me, but i will not let you ruin valentines too... [black and white selfie] / got my office selfie in today! [toilet mirror selfie] / i finally caved in and went to cut my hair today. omg so short now [mirror selfie zooming into her hair] / i swear she forced me to take this! [re-post] / GIRLS NIGHT [boomerang showing clinking of wine glasses at a bar] / casually asked the stranger behind us if guys think of songs they want to play at their wedding. [disorientating video of her and her friends giggling in the background] / me time <3 [photo of a lang leav book and a cup of coffee] / ["mysterious" boomerang showing male arms and torso +  instagram handle tag thats too small to see] x5 posts over the course of 2 weeks / you know your relationship has fully transitioned into a working adult relationship when you find yourself in a funny situation like coincidentally having to OT the same day as your partner. [black screen] / i could have taken the bus down since it was only 3 stops away but guess who came to fetch me. im so lucky! heart eyes emoji x3 [after 2 weeks soft launching her new beau, she finally decides to do a full reveal and maybe...just maybe, she might dedicate a post or more to him which of course she will delete when they eventually breakup]';
var words = para.split(' '); 
var wx, wy; 
var typeSize = 28; 
var kerning = 12; 
var leading = 40; 
function preload() {
  font = loadFont('data/MaisonNeue-Medium.otf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(typeSize);
  strokeWeight(2);
  //background('green');
  frameRate(100);
}

function draw() {
  background('blue');
  //noStroke();
  fill('orange');
  wx = margin;
  wy = 50; 
  textSize (15);
  textSize(typeSize);
  for (let w=0; w<words.length; w++){
    if (wx+textWidth(words[w])<=width-margin){
      points1=font.textToPoints(words[w], wx, wy+50, typeSize, 0.9);
      noStroke();
    if (frameCount>5*w){
      text(words[w], wx, wy+50);
        for (let i=0; i < points1.length; i++){
        noStroke();
        point(points1[i].x, points1[i].y);
        }
    }  
    wx+= textWidth(words[w])+kerning; 
  }
    else {
      wx = margin;
      wy+= leading;
      w--;
    
    }
  }
  
} 
