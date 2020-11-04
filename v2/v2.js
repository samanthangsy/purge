var symptoms = ['You believe you need social media to be OK', 'Your phone has become an extension of your arm', 'You are having problems with impulse control', 'You spend hours mindlessly scrolling through social media during downtime', 'You are finding it hard to focus', 'You have stopped living in the moment', 'The phone always eats before you do', 'Social media interferes with your productivity', 'You make excuses to check into social media often', 'You find yourself disengaged from real life', 'You get upset looking at content on social media', 'You get jealous of people you see online', 'You feel helpless without social media', 'You would literally DIE if you did not have your phone'];
var para1 = 'HERE\'S HOW TO TAKE A SOCIAL MEDIA DETOX';
var tip1 = 'SET TIME LIMITS';
var tip2 = 'SHIFT YOUR ATTENTION';
var tip3 = 'BE PRESENT';
var tip4 = 'LISTEN TO\nYOUR EMOTIONS';
var tip5 = "DON'T LOOK FOR DISTRACTIONS";
var tip6 = 'TUNE IN\nWITH REALITY';
var tip7 = "LOOK AT\nHOW FAR\nYOU'VE COME";
var tip8 = "BE REALISTIC"; 
var chead = "NOW WHAT?"; 

var copy1 = "Reduce your social media usage gradually. I know it’s hard.\nIt is an addiction after all, so you have to take it slow.\nIf you spend an average of 4h on Instagram, take it down to 3h\nthen to 2h and so on week by week. Remember to go at your own pace.\nNo one is asking you to get off social media completely.\nFor starters, just reduce the time you spend on these platforms and see if you notice any difference in your life.";
var copy2 = "Do you find yourself constantly reaching for your phone to check notifications or just to scroll mindlessly through social media? \nFocus on your hobbies or things you like to do in your free time. \nIf you just can’t seem to figure out what else to do, here are some options you can consider: read a book, watch a movie, pack your room, call a friend, journal, meditate, exercise or pick up a skill. You will find that your time is better spent doing something productive or learning something new, rather than keeping up with what Kylie Jenner is up to today.";
var copy3 = "Now it’s time to focus on social skills minus the media part. \nMeet up with some friends and resist the need to document anything with your phone. Be fully present and realise that you can actually enjoy the company of others when technology doesn’t get in the way. You might even experience a sense of freedom you haven’t felt in a long time. Conversations will be more meaningful, friendships will deepen and things would just hit different.";
var copy4 = "If you ever start to feel overwhelmed or upset by social media content, lean in to your emotions and acknowledge those feelings. \nDo not ever feel that you owe it to anyone to stay active online. \nDo take a break from it all. It doesn’t have to be permanent. Everything will still be there should you return and you will have a clearer mindset to face it. You will thank yourself later.";
var copy5 = "It’s become a habit to pick up our phones whenever we have free time between activities like waiting for public transport and whatnot. Even while on public transport, many can be seen face down looking at their phones swiping away. It has become a distraction and we are too reliant on it. Instead of turning to our devices, why don’t we look around and observe our surroundings. Start having a greater appreciation for the things we don’t usually pay attention to because we’re too busy looking down at screens. If you just don’t feel like thinking of anything, daydream and let your mind wander. Disconnect from technology to connect with the real world.";
var copy6 = "Whether its perfect bodies, luxurious lifestyles or idealistic relationships, we’re constantly bombarded by posts revolving around these themes from so-called influencers on social media.\nIt is possible to accept and celebrate our own circumstances while appreciating their privilege but more often than not, some tend to feel envious andlousy that our lives are not up to par.\nIf this is you, perhaps think about unfollowing such people on social media. You have to understand that perfection is nothing but a mirage. People only post content that looks good, which are likely edited to appeal to the masses. Seeing other people live their best lives can only make you feel even lonelier sometimes. Focus on real things that matter to you, not how this over-glorified content creator is spending her third staycation of the month.";
var copy7 = "This change may be a huge step for you and it should not be rushed. Ease yourself into it and make it a lifestyle worth maintaining. Think about it this way, it may seem like you have lost something, but what you have really gained is more freedom. Celebrate your progress and see where this detox takes you.";
var copy8 = "Giving up on social media entirely may not be realistic for all.\nIt could be an option if you’re up for it but if not, practice mindful usage and moderation. There’s no one size fits all solution,\nso find out what works for you and integrate that into your life.";
var cbody1 = "Hopefully this little guide has helped you re-evaluate social media and your place in it.\nAlways remember that validation from others is NOT a measure of your self-worth.\nUse social media for yourself but don’t get lost in everything else.";
var cbody2 = "SHARE THIS WITH SOMEONE WHO MIGHT NEED A PURGE."; 

function preload() {
  nm = loadFont('data/NeueMachina-Ultrabold.otf');
  sp = loadFont('data/Supply-Regular.otf');
}

function setup() {
  createCanvas (windowWidth,windowHeight*9,);  
}
 

//WHEN MOUSE IS PRESSED, SONG IS ACTIVATED AFTER THE LANDING PAGE AND ALSO CUES THE NEXT SCENE 
function mousePressed() {
  mode++;
}

//function mouseWheel() {
//}

function draw() {
  background (255,255,244); 
  
//TITLE OF PROJECT 
  textAlign(CENTER,CENTER);
  fill(36,36,36);
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
  textAlign(CENTER);
  text(s,width/2,height/13); 
  frameRate(3);
  
    
  //TIP ONE
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #1",width/4.5,height/8.6);
  //fill(random(255),random(255),random(255));
  fill(255,151,10);
  textSize(80);
  text(tip1,width/4.5,height/11.6,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy1,width/4.5,height/8.7,830,300);
  
  //TIP TWO
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #2",width/4.5,height/5.17);
  fill(255,151,10);
  textSize(80);
  text(tip2,width/4.5,height/5.84,800,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy2,width/4.5,height/4.6,830,300);
    
  //TIP THREE
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #3",width/4.5,height/3.38);
  fill(255,151,10);
  textSize(80);
  text(tip3,width/4.5,height/3.755,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy3,width/4.5,height/3.3,830,300);

  //TIP FOUR
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #4",width/4.5,height/2.63);
  fill(255,151,10);
  textSize(80);
  text(tip4,width/4.5,height/2.85,800,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy4,width/4.5,height/2.5,830,300);
  
  //TIP FIVE
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #5",width/4.5,height/2.09);
  fill(255,151,10);
  textSize(80);
  text(tip5,width/4.5,height/2.19,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy5,width/4.5,height/1.96,830,300);
  
  //TIP SIX
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #6",width/4.5,height/1.69);
  fill(255,151,10);
  textSize(80);
  text(tip6,width/4.5,height/1.778,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy6,width/4.5,height/1.62,830,400);
  
  
  //TIP SEVEN
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #7",width/4.5,height/1.395);
  fill(255,151,10);
  textSize(80);
  text(tip7,width/4.5,height/1.454,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy7,width/4.5,height/1.327,830,300);
  
  
  //TIP EIGHT
  textFont(nm); 
  fill(128,122,110);
  textAlign(LEFT,CENTER);
  textSize(30);
  text("TIP #8",width/4.5,height/1.213);
  fill(255,151,10);
  textSize(80);
  text(tip8,width/4.5,height/1.257,1100,500);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  text(copy8,width/4.5,height/1.21,830,300);
  
  //CLOSING
  textFont(nm); 
  textAlign(CENTER);
  textSize(200);
  fill(random(255),random(255),random(255));
  text("SO...",width/2,height-600);
  textSize(100);
  //fill(128,122,110);
  text(chead,width/2, height-470);
  textFont(sp); 
  fill(36,36,36);
  textSize(20);
  textAlign(CENTER,CENTER);
  text(cbody1,width/8, height-570,1100,500);
  text(cbody2,width/8, height-400,1100,500);
  
  
  
  
  
  
  
//CREDITS
  fill(169,169,169);
  textFont(sp);
  textSize(14);
  //textAlign(RIGHT);
  //text('INFO',(windowWidth-90),55);
  
  textAlign(LEFT);
  text('PURGE',90,height-45);
  textAlign(CENTER);
  text('by STRANGECROISSANT',width/2,height-45);
  textAlign(RIGHT);
  text('2020',width-90,height-45);


}
