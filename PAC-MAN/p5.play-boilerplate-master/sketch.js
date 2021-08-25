var scenary



function preload(){
 scenary=loadImage("images/galaxy.jpg")

}

function setup() {
  createCanvas(800,800);
  pacman1=new Player()
  Wall1=new Wall(796,500,400,30)
  Wall2=new Wall(700,400,30,200)
  Wall3=new Wall(380,500,300,30)
  Wall4=new Wall(520,590,30,200)
  Wall5=new Wall(790,145,300,30)
  Wall6=new Wall(750,145,300,30)
  Wall7=new Wall(5,140,350,30)
  Wall8=new Wall(250,250,30,250)
  Wall9=new Wall(360,370,250,30)
  Wall10=new Wall(445,80,30,300)
  Wall11=new Wall(50,440,300,30)
  Wall12=new Wall(5,220,300,30)
}

function draw() {
  background(scenary);  
  drawSprites();
 textSize (20)
 fill ("white")
  text (mouseX+";"+mouseY,100,200)
  if(keyDown("right")){
  pacman1.body.x+=5
  pacman1.body.rotation=0
  }
  if(keyDown("left")){
    pacman1.body.x-=5
    pacman1.body.rotation=-180
    }
  if(keyDown("up")){
      pacman1.body.y-=5
      pacman1.body.rotation=-90
      }
  if(keyDown("down")){
        pacman1.body.y+=5
        pacman1.body.rotation=90
        }
}