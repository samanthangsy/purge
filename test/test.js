//var mode = 0; 

//var subtitle = 'A GUIDE TO SOCIAL MEDIA DETOX'; 
var cue1 = 'Scroll to DIS(CONNECT)'; 
var credits = 'A guide by strangecroissant';

var para1 = 'IS THIS YOU????????'
var symptoms = ['You believe you need social media to be OK', 'Your phone has become an extension of your arm', 'You are having problems with impulse control', 'You spend hours mindlessly scrolling through social media during downtime', 'You are finding it hard to focus', 'You have stopped living in the moment', 'The phone always eats before you do', 'Social media interferes with your productivity', 'You make excuses to check into social media often', 'You find yourself disengaged from real life', 'You get upset looking at content on social media', 'You get jealous of people you see online', 'You feel helpless without social media', 'You would literally DIE if you did not have your phone'];
var para2 = 'if so, read on';

var para3 = 'Limit the time you spend on social media'


//var gif; 


function preload() {
  ms = loadFont('data/MaisonNeue-Demi.otf'); 
  ics = loadFont('data/inconsolata.ttf');
  //song = loadSound('data/gpsjammeroutput.mp3');
  chair = loadImage('data/woodenchair.png');
  //scroll = loadGif('scroll.gif');
  ikigai = loadImage('data/IKIGAI.png');
  test = loadImage('data/test.png');
  onesub = loadImage('data/tip1subtitle.png');
  
}

function setup() {
  createCanvas (windowWidth,windowHeight*10);  
}
 

//WHEN MOUSE IS PRESSED, SONG IS ACTIVATED AFTER THE LANDING PAGE AND ALSO CUES THE NEXT SCENE 
function mousePressed() {
  //mode++;
}

//function mouseWheel() {
//}

function draw() {
  background (255,255,244); 
  image(chair, -70, height/90, chair.width/3, chair.height/3);

//TITLE OF PROJECT 
  textAlign (LEFT);
  fill('pink');
  //fill(random(255),random(255),random(255));
  textFont(ms); 
  textSize(450);
  textAlign(CENTER,CENTER);
  text('PURGE',width/2,height/23);
  
//SUBTITLE
  //fill(random(255),random(255),random(255));
  //fill(169,169,169);
  //textSize(30);
  //text(subtitle,width/2,height/13);
  
//CUE TO SCROLL
  //fill(random(255),random(255),random(255));
  fill(169,169,169);
  textSize(20);
  text(cue1,width/2,height/10.5);

//CREDITS
  textFont(ics); 
  fill(169,169,169);
  textSize(20);
  textAlign(RIGHT);
  //text('INFO',(windowWidth-80),55);
  text(credits,(windowWidth-40),55);

//INFO 
  textAlign(CENTER);
  text('INFO', width/2,55);

//IS THIS YOU
  textAlign(RIGHT);
  textSize(120)
  text(para1,(windowWidth-40),900);
  
//symptoms random appearance 
  textAlign(CENTER);
  textSize(30)
  var s = random(symptoms); 
  text(s,width/2,height/7); 
  frameRate(7);

//ikigai 
  image(ikigai, width/5.5, height/5,481,259.5); 
  image(test, width/15, height/4); 

//tip 1 
  textAlign (LEFT);
  fill('orange');
  textFont(ms); 
  textSize(60);
  text('STEP 1',width/10,height/5.5);
  textFont(ics); 
  textSize(40)
  text(para3,width/4,height/5.5);
  image(onesub,width/4,height/5.3);

}
