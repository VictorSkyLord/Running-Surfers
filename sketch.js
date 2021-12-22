var JOGAR=1;
var trilha, trilhaImg;
var jogador,jogadorCorrendo;
var estadoDeJogo = JOGAR;
var paredeDireita, paredeEsquerda;

function preload(){
   jogadorCorrendo = loadAnimation ("Jake1.png", "Jake2.png");
  
  trilhaImg = loadImage("trilha.png");
}

function setup(){
  createCanvas(400,400);

  jogador = createSprite(World.mouseX,330,50,50);
  jogador.addAnimation("correndo", jogadorCorrendo);
  jogador.scale=0.7;
  
  
  paredeDireita = createSprite (390,200,80,600);
  paredeDireita.visible = false;
  
  paredeEsquerda = createSprite (10,200,80,600);
  paredeEsquerda.visible = false;
  
  trilha=createSprite (200, 200);


  trilha.addImage (trilhaImg);

  trilha.velocityY= 4;

  trilha.scale=1;
  trilha.depth = 0.1;
}

function draw() {
  background(0);

   if(estadoDeJogo === JOGAR) {
     
    jogador.x=World.mouseX;
    jogador.collide(paredeDireita); 
    jogador.collide(paredeEsquerda); 
     
 if(trilha.y > 400 ) {
   trilha.y = height/2;
 } 
}
  
drawSprites();
}
 
