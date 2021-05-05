var bg
var earth,earth_Image
var rocket,rocket_Image
var rocket_Count=0
var spaceShip,spaceShip_Image1,spaceShip_Image2,spaceShip_Image3,spaceShip_Image4,spaceShip_Image5,spaceShip_Image6,spaceShip_Image7,spaceShip_Image8
var spaceShip_Group,rocket_Group
var score=0




function preload(){
  bg=loadImage("bg1.jpg")
  earth_Image=loadImage("earth.png")
  rocket_Image=loadImage("rocket.png")
  spaceShip_Image1=loadImage("spacecraft1.png")
  spaceShip_Image2=loadImage("spacecraft2.png")
  spaceShip_Image3=loadImage("spacecraft3.png")
  spaceShip_Image4=loadImage("spacecraft4.png")
  spaceShip_Image5=loadImage("spacecraft5.png")
  spaceShip_Image6=loadImage("spacecraft6.png")
  spaceShip_Image7=loadImage("spacecraft7.png")
  spaceShip_Image8=loadImage("spacecraft8.png")

}

function setup() {
  createCanvas(1366,625);
  earth=createSprite(200,312,50,50)
  earth.addImage(earth_Image)
  earth.scale=1.2

  spaceShip_Group=new Group()
  rocket_Group= new Group()
  
}

function draw() {
  background(bg); 
  if (keyDown(32)) {
    rockets();
    rocket_Count+=1
  }
  if(rocket_Group.x>=1360){
    rocket_Count-=1

  }
  aliens_space_ships()

  if(rocket_Group.isTouching(spaceShip_Group)){
    spaceShip_Group.destroyEach()
    rocket_Group.destroyEach()
    score=score+1
  }

  if(keyDown("a")){
    rocket_Group.y=rocket_Group.y-2
  }
  drawSprites();
  fill("white")
  textSize(20)
  text("SCORE : "+score,1300,200)
}
function rockets() {
  if(rocket_Count===0&&keyDown(32)){
  rocket= createSprite(360, 300, 5, 10);
  rocket.addImage(rocket_Image);

  rocket.velocityX = 10;
  rocket.scale = 0.3;
  rocket.lifetime = 100;
  rocket_Group.add(rocket)
  return rocket;
  }

}

function aliens_space_ships(){
  if(frameCount % 175===0){
    spaceShip=createSprite(1300,Math.round(random(100,450)),50,50)
    var rand = Math.round(random(1,8));
  switch(rand) {
    case 1: spaceShip.addImage(spaceShip_Image1);
            break;
    case 2: spaceShip.addImage(spaceShip_Image2);
            break;
    case 3: spaceShip.addImage(spaceShip_Image3);
            break;
    case 4: spaceShip.addImage(spaceShip_Image4);
            break;
    case 5: spaceShip.addImage(spaceShip_Image5);
            break;
    case 6: spaceShip.addImage(spaceShip_Image6);
            break;
    case 7: spaceShip.addImage(spaceShip_Image7);
            break;
    case 8: spaceShip.addImage(spaceShip_Image8);
            break;
    default: break;
  }
  spaceShip.scale=0.4
  spaceShip.velocity.x=-8
  spaceShip_Group.add(spaceShip)

  }

}