//Create variables here
var database;
var dog;
var dogImg;
var happyDog;
var foodS;
var foodStock; 
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,350,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown("space")){
    writeStock(foodS);
    dog.addImage(happyDog);
    console.log("Hello");
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("red");
  text("Food Left: " + foodS,100,200);  

}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){
if(x<=0){
  x = 0;
} else{
  x = x - 1;
}

 database.ref('/').update({
   Food: x
 })
}


