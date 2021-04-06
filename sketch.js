var jungleimg;
var openingplayerimg,openingplayer;


function preload(){
    jungleimg=loadImage("Jungle.jpg");
    openingplayerimg=loadImage("Opening Character.png");
}
function setup(){
    form= new Form()
    form.display();
createCanvas(displayWidth,displayHeight);

openingplayer=createSprite(1250,250,200,200)
openingplayer.addImage("openingplayerimg",openingplayerimg)
//openingplayer.scale=;

form= new Form()
form.display();

}
function draw(){
background(jungleimg)
textSize(60)
fill("blue")
text("The Education Adventure!",100,100)

drawSprites();
}