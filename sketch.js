var knife,knifeImage,enemyG,enemyImage,fruit1,fruit2,fruit3,fruit4,fruitG,
fruit1Image,fruit2Image,fruit3Image,fruit4Image,score,gameOverImage;

var gameOverSound
var knifeSwooshSound
var PLAY = 1;
var End = 0;
var gameState = PLAY;


function preload(){
  
knifeImage = loadImage("knife.png");
enemyImage = loadImage("alien1.png","alien2.png");
fruit1Image = loadImage("fruit1.png");
fruit2Image = loadImage("fruit2.png");
fruit3Image = loadImage("fruit3.png");
fruit4Image = loadImage("fruit4.png");
gameOverImage = loadImage("gameover.png");
gameOverSound = loadSound("gameover.mp3");
knifeSwooshSound = loadSound("knifeSwoosh.mp3");

}

function setup(){
  createCanvas(600,600);

  knife = createSprite(200,200,100,100);
  knife.addImage(knifeImage);
  knife.scake = 0.5;

  enemyG = new Group()
  fruitG = new Group()

  score=0

}

function draw(){
  background("lightblue")

  if(gameState === PLAY){
    knife.x = World.mouseX
    knife.y = World.mouseY

    var select_item = Math.round(random(1,5));
    if (World.frameCount%100===0){
      if (select_item == 1){
        fruit1()
      } else if (select_item == 2){
        enemy()
      } else if (select_item == 3){
        fruit2()
      } else if (select_item == 4){
        fruit3()
      } else {
        fruit4()
      }
    }

    if (knife.isTouching(fruitG)){
      fruitG.destroyEach()
      score = score+1
      knifeSwooshSound.play()
    }

    else

    if(knife.isTouching(enemyG)){
      enemyG.destroyEach()
      gameState = END;
      fruitG.destroyEach()
      enemyG.setVelocityXEach(0)
      fruitG.setVelocityXEach(0)
      knife.addImage(gameOverImage)
      knife.scale = 2
      knife.x = 300
      knife.y = 200
      gameOverSound.play()
    }
  }

  drawSprites();

  text("Score;"+score,500,50);

  }

  function enemy (){

  var enemy = createSprite(600,Math.round(random(30,400)),10,10)
  
  enemy.addAnimation("enemy_blinking",enemyImage);
  enemy.velocityX=-(7+(score/10));
  enemy.scale = 0.75
  enemy.lifetime = 150
  enemyG.add(enemy)
    
  }

  function fruit1(){

    var fruit1 = createSprite(600,Math.round(random(30,400)),10,10)
    var set_position = Math.round(random(1,2));
    if (set_position==1){
      fruit1.x=400;
      fruit1.velocityX = -(7+(score/4));
    } else{
      fruit1.x=0;
      fruit1.velocityX = 7+(score/4)
    }
    fruit1.addImage(fruit1Image)
    fruit1.scale = 0.2
    fruit1.lifetime = 150
    fruitG.add(fruit1)
  }

  function fruit2(){

    var fruit2 = createSprite(600,Math.round(random(30,400)),10,10)
    var set_position = (600,Math.round(random(30,400)),10,10)
    if(set_position == 1){
      fruit2.x = 400;
      fruit2.velocityX = -(7+(score/4));
    } else {
      fruit2.x = 400;
      fruit2.velocityX = 7+(score/4)
    }
    fruit2.addImage(fruit2Image)
    fruit2.scale = 0.2
    fruit2.lifetime = 150
    fruitG.add(fruit2)

  }

  function fruit(){
    var fruit3=createSprite(600,Math.round(random(30,400)),10,10) 
    var set_position=Math.round(random(1,2));
    if (set_position == 1){
      fruit3.x = 600;
      fruit3.velocityX = -(7+(score/4));
    } else {
      fruit3.x = 0;
      fruit3.velocityX = 7+(score/4)
    }
    fruit3.addImage(fruit3Image)
    fruit3.scale = 0.2
    fruit3.lifetime = 150
    fruitG.add(fruit3)
  }

  function fruit4(){

    var fruit4 = createSprite(600,Math.round(random(30,400)),10,10)
    var set_position=Math.round(random(1,2));
    if(set_position == 1){
      fruit4.x = 400;
      fruit4.velocityX = -(7+(score/4));
    } else {
      fruit4.x = 0;
      fruit4.velocityX = 7+(score/4)
    }
    fruit4.addImage(fruit4Image)
    fruit4.scale = 0.2
    fruit4.lifetime = 150
    fruitG.add(fruit4)
  }