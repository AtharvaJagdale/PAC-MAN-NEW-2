var scenary



function preload(){
 scenary=loadImage("images/galaxy.jpg")

}

function setup() {
  createCanvas(800,800);
  pacman1=new Player()
  Wall1=new Wall(230,205,200,20)
  Wall2=new Wall(500,205,200,20)
  Wall3=new Wall(450,350,20,100)
  Wall4=new Wall(280,350,20,100)
  Wall5=new Wall(360,390,170,20)
  Wall6=new Wall(230,490,200,20)
  Wall7=new Wall(500,490,200,20)
  Wall8=new Wall(75,330,20,150)
  Wall9=new Wall(115,400,100,20)
  Wall10=new Wall(670,330,20,150)
  Wall11=new Wall(630,400,100,20)
  Wall12=new Wall(160,655,200,20)
  Wall13=new Wall(260,615,20,100)
  Wall14=new Wall(350,565,200,20)
  Wall15=new Wall(450,605,20,100)
  Wall16=new Wall(540,650,200,20)
  Wall17=new Wall(160,70,200,20)
  Wall18=new Wall(260,85,20,50)
  Wall19=new Wall(350,110,200,20)
  Wall20=new Wall(450,95,20,50)
  Wall21=new Wall(540,70,200,20)
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