
var symptoms = ['You believe you need social media to be OK', 'Your phone has become an extension of your arm', 'You are having problems with impulse control', 'You spend hours mindlessly scrolling through social media during downtime', 'You are finding it hard to focus', 'You have stopped living in the moment', 'The phone always eats before you do', 'Social media interferes with your productivity', 'You make excuses to check into social media often', 'You find yourself disengaged from real life', 'You get upset looking at content on social media', 'You get jealous of people you see online', 'You feel helpless without social media', 'You would literally DIE if you did not have your phone'];
var para1 = 'HERE\'S HOW TO TAKE A SOCIAL MEDIA DETOX';
var para2 = 'Limit the time you spend on social media'

function preload() {
  nm = loadFont('data/NeueMachina-Ultrabold.otf');
  sp = loadFont('data/Supply-Regular.otf');
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
  
//TITLE OF PROJECT 
  textAlign(CENTER,CENTER);
  fill(36,36,36);
  //fill(random(255),random(255),random(255));
  textFont(nm); 
  textSize(350);
  text('PURGE',width/2,height/23);
  
  textFont(sp);
  textSize(30); 
  text('IT\'S TIME TO', width/2,height/52);
  text('IF', width/2,height/14.7);
  
  //heres how to
  textSize(40);
  text('HERE\'S HOW TO TAKE A SOCIAL MEDIA DETOX', width/2,height/11.5);
  
  
  //symptoms random appearance 
  textSize(30)
  fill(169,169,169);
  frameRate(100);
  var s = random(symptoms); 
  text(s,width/2,height/13); 
  frameRate(7);

//CREDITS
  fill(169,169,169);
  textSize(14);
  textAlign(RIGHT);
  text('INFO',(windowWidth-90),55);
}
