var ninarosa,ninitarosita,ninarosacayo,nrc;
var carretera,caminito;
var seacabo,terminadojuego;
var ninamarilla,ninitamarilla,ninamarillacayo,nmc;


function preload(){
  ninitarosita = loadAnimation("ninia rosa 1.png","chamaca rosa 2.png");

ninitamarilla = loadAnimation("niñita marilla 1.png","niña marilla 2.png");

  ninamarillacayo = loadImage ("niña marilla 3.png")

  ninarosacayo = loadImage ("niña rosa 3.png")
 
  carretera = loadImage ("camino.png")
}
 

function setup(){
  
createCanvas(600,350);
// Fondo en movimiento
caminito = createSprite(300,175)
caminito.addImage("rodando",carretera)
caminito.velocityX=-06
  caminito.scale = 0.4

ninarosa = createSprite(200,100)
ninarosa.addAnimation("rodando",ninitarosita)
ninarosa.velocityX=0
ninarosa.scale = 0.08
  ninarosa.setCollider("circle",0,0,150)
ninarosa.debug=true
  
ninamarilla = createSprite(650,250)
ninamarilla.addAnimation("rodando",ninitamarilla)
ninamarilla.velocityX=-2
ninamarilla.scale = 0.08
ninamarilla.setCollider("circle",0,0,150)
ninamarilla.debug=true
  
nrc = createSprite (225,100)
nrc.addImage("caida",ninarosacayo)
nrc.scale = 0.08
  
nmc = createSprite (299,250)
nmc.addImage("caida",ninamarillacayo)
nmc.scale = 0.08
nrc.visible=false
nmc.visible=false
}

function draw() {
  background(0);
  
  ninarosa.y=mouseY;
  
  if (caminito.x <0){
 caminito.x=360.5
  }
  
 if (ninarosa.isTouching (ninamarilla)){
 nrc.y=ninarosa.y
 nrc.visible=true
nmc.visible=true
   caminito.velocityX=0
   ninarosa.destroy()
   ninamarilla.destroy()
 }
   

drawSprites();

  
}





