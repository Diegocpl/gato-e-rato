var rato, gato, fundoimg

function preload() {
fundoimg = loadImage("images/garden.png")
gatoimg1 = loadAnimation("images/cat1.png")
ratoimg1 = loadAnimation("images/mouse1.png")
gatoimg2 = loadAnimation("images/cat2.png","images/cat3.png")
ratoimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
gatoimg3 = loadAnimation("images/cat4.png")
ratoimg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   
    gato = createSprite(500,750)
    gato.addAnimation("gatoSentado", gatoimg1);
    gato.scale = 0.1
    rato = createSprite(100,750)
    rato.addAnimation("ratoqueijo", ratoimg1)
    rato.scale = 0.1
}

function draw() {

    background(fundoimg);
    
    if(gato.x - rato.x <(gato.width - rato.width)/2){
      gato.velocityX=0;
      gato.addAnimation("ultimaImagemGato", gatoimg3)
      gato.changeAnimation("ultimaImagemGato");
      gato.x = 200;
      gato.scale=0.1;
      rato.addAnimation("ratofim", ratoimg3)
      rato.changeAnimation("ratofim");
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    rato.addAnimation("ratoProvocando", ratoimg2);
    rato.changeAnimation("ratoProvocando");
    rato.frameDelay = 25;

    gato.addAnimation("gatoandando", gatoimg2);
    gato.changeAnimation("gatoandando");
    gato.velocityX = -5;
  }


}
