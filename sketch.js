var Engine = Matter.Engine,
Render = Matter.Render,
Composites = Matter.Composites,
  Composite = Matter.Composite,
Mouse = Matter.Mouse,
World = Matter.World,
Constraint = Matter.Constraint,
Bodies = Matter.Bodies,
Body = Matter.Body;

var engine = Engine.create();
var gameState=0
var render = Render.create({
element: document.body,
engine: engine,
options: {
  background:"estadio.jpg",
  width: 1100,
  height: 350,
  wireframes: false

}
});

var topWall = Bodies.rectangle(600, -20, 1200, 20, { isStatic: true,
render:{
sprite:{
  texture:'palos.png'
}

}
});
var leftWall = Bodies.rectangle(-20, 250, 20, 500, { isStatic: true,
render:{
  sprite:{
texture:'palos.png'

  }
}
});
var rightWall = Bodies.rectangle(1120, 250, 20, 500, { isStatic: true,
render:{
  sprite:{
    texture:'palos.png'
  }
}
});
var bottomWall = Bodies.rectangle(600,360, 1200, 20, { isStatic: true,
render:{
  sprite:{
    texture:'palos.png',
    xScale:4,
    yScale:4
  }
}
});

var porteriaizq = Bodies.rectangle(10,164,140,20,{isStatic:true,
render:{
  sprite:{
    
texture:'porteria.png',
yScale:3.6,
xScale:2

  }
}



})


var porteriader=Bodies.rectangle(1095,160,120,20,{isStatic:true,
render:{
  sprite:{
texture:'porteria2.png',
yScale:3.56,
xScale:2.1
  }
}
})

var contador=60
var ball = Bodies.circle(550, 280, 20, {
render: {
  sprite: {
    texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
    xScale: 0.35,
    yScale: 0.35
  }
}
});
var paloizq= Bodies.rectangle(140,400,20,250,{isStatic:true})
var bu=Bodies.rectangle(200,400,100,30,{isStatic:true})
var car = Bodies.rectangle(960, 100,50,77,{angle:0,
render:{
sprite:{
  
texture:'messi.png',
xScale:1.5,
yScale:1.5,
}


}

})

var car2 = Bodies.rectangle(150, 100, 60,85,{angle:0,
render:{
  sprite:{
    texture:'cristiano.png',
    xScale:1.5,
    yScale:1.5,

  }
}
});
var score=0
var score2=0


World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball,car,porteriaizq,porteriader, car2, ]);

Engine.run(engine);

Render.run(render);


  function preload(){
    inicioSound=loadSound("inicio.mp4")
    endSound=loadSound("fin.mp4")
    goalSound=loadSound("gol.mp4")
marcoimg=loadImage("marco.png")
player1img=loadImage("player1.png")
player2img=loadImage("player2.png")
win=loadSound('Victoria.mp4')
flechasimg=loadImage("FLECHAS.png")
Mimg=loadImage("M.png")
awdimg=loadImage("AWD.png")
rimg=loadImage("R.png")
controlsimg=loadImage("controls.png")
clickSound=loadSound("pitido.mp3")
pw1img=loadImage('P1W.png')
pw2img=loadImage('P2W.png')
drawimg=loadImage('draw.png')
fondoimg=loadImage('fondo.jpeg')


  }
  

function setup(){
  var canvas = createCanvas(1200,100);
marcador=createSprite(600,32, 600,60)
marcador.shapeColor="black"
marco=createSprite(550,31)
marco.addImage(marcoimg)
marco.scale=0.18
marco2=createSprite(600,31)
marco2.addImage(marcoimg)
marco2.scale=0.18
marcador2=createSprite(600,78,120,35)
marcador2.shapeColor="black"
player1=createSprite(430,35)
player1.scale=0.7
player1.addImage(player1img)
player2=createSprite(790,35)
player2.scale=0.7
player2.addImage(player2img)
//pause=createSprite(1450,45)
  //pause.addImage(pauseimg)
  //pause.scale=.2
//int=createSprite(1360,50)
  //int.addImage(Intimg)
  //int.scale=.22
buton=createButton('| |')
buton.position(1220,510)
  buton2=createButton('? ')
  buton2.position(1293,510);
  flechas=createSprite(1020,50)
flechas.addImage(flechasimg)
flechas.scale=1.5
flechas.visible=false
m=createSprite(880,12)
m.addImage(Mimg)
m.scale=1.4
m.visible=false
awd=createSprite(585,48)
awd.addImage(awdimg)
awd.scale=1.5
awd.visible=false
r=createSprite(498,9)
r.addImage(rimg)
r.visible=false
r.scale=1.5
control=createSprite(90,40)
control.addImage(controlsimg)
control.scale=.45
control.visible=false
pw1=createSprite(150,40)
pw1.addImage(pw1img)
pw1.scale=.5
pw1.visible=false
pw2=createSprite(150,40)
pw2.addImage(pw2img)
pw2.scale=.5
pw2.visible=false
empate=createSprite(150,40)
empate.addImage(drawimg)
empate.scale=.5
empate.visible=false

}
function draw(){
background(fondoimg)


if(gameState===0){
  console.log(ball.position.y)
  Matter.Body.setAngle(car, 0)
  Matter.Body.setAngle(car2, 0)

 buton.mousePressed(gameState3)
buton2.mousePressed(controls)
console.log(car.position.y)
// console.log(car.bodies[0].position.x)
  if(frameCount%30===0){
    contador+=-1
  }
 
  ball.friction = 0.001;
  ball.frictionAir = 0.001;
  ball.restitution = 0.54;
  if(keyDown("left")&&car.position.y>265){
    //Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:-0.03,y:0})
    Body.setVelocity( car, {x:-5, y:0});
    Matter.Body.setAngle(car, 0)

  }
if(keyDown(38)&&car.position.y>305){
  //Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:-0,y:-0.3 })
  Body.setVelocity( car, {x: 0, y: -6.3});

}
if(keyDown("right")&&car.position.y>265){
  //Body.applyForce(car.bodies[0],{x:car.bodies[0].position.x, y:car.bodies[0].position.y},{x:+0.03,y:0})
  Body.setVelocity( car, {x:5, y: 0});
  Matter.Body.setAngle(car, 0)

}
if(ball.position.x>800&&car2.position.y>265&&ball.position.y>290){
  //Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:-0.03,y:0})
  Body.setVelocity( car2, {x:-5, y: 0});
  Matter.Body.setAngle(car2, 0)

}

if(ball.position.x<800&&car2.position.y>265&&ball.position.y>290&&ball.position.x>150){
  //Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:+0.03,y:0})
  Body.setVelocity( car2, {x:5, y: 0});
  Matter.Body.setAngle(car2, 0)


}
if(ball.position.x<car2.position.x){
  Body.setVelocity( car2, {x:-5, y: 0});
  Matter.Body.setAngle(car2, 0)
}
if(ball.position.y<305&& ball.position.y>296&&car2.position.y>305&&ball.position.x<800){
  //Body.applyForce(car2.bodies[0],{x:car2.bodies[0].position.x, y:car2.bodies[0].position.y},{x:0,y:-0.3})
  Body.setVelocity( car2,{x:0, y: -6.3});

}

if(ball.position.x<car2.position.x+70&&ball.position.y>330&&car2.position.x<ball.position.x){
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: 0.06, y: -0.065}
  );
}
if(keyWentDown('m')&&ball.position.x>car.position.x-100&&ball.position.y>330&&car.position.x>ball.position.x){
  Body.applyForce(
    ball,
    { x: ball.position.x, y: ball.position.y },
    { x: -0.06, y: -0.065}
  );

}

if(ball.position.x<50&&ball.position.y>200&&ball.position.y<500){
  score2+=+1
  goalSound.play()
  gameState+=+1
}
if(ball.position.y>515&&frameCount%20===0){
  Body.setPosition(ball,{x:750, y:50})
Body.setVelocity( ball, {x: -1, y: 1});
}
if(ball.position.x>1025&&ball.position.y>200&&ball.position.y<500){
score+=+1
goalSound.play()

  gameState+=+1
}
if(ball.position.x>1383&&ball.position.y>200){
  gameState+=+1


}
if(contador===0){
  endSound.play();
  if(score===score2){
empate.visible=true

  }
if(score>score2){
pw1.visible=true
win.play()
}
if(score2>score){
  pw2.visible=true
  win.play()

}
  gameState2()

  gameState=2
}


}
if(gameState===1){
  Matter.Body.setAngle(car, 0)
  Matter.Body.setAngle(car2, 0)
  ball.friction = 0.1;
  ball.frictionAir = 0.02 ;
  ball.restitution = 0;

  if(frameCount%100===0){
    Body.setPosition( car, {x:960,y:50});
    Body.setVelocity( car, {x: 0, y: 1});
    Body.setPosition( car2, {x:150,y:50});
    Body.setVelocity( car2, {x: 0, y: 1});

Body.setPosition(ball,{x:550, y:50})
Body.setVelocity( ball, {x: 0, y: 1});


gameState=0}

if(frameCount%30===0){
  contador+=-1
}
}
if(gameState===2){
buton.mousePressed(gameState000)

}
if(gameState===3){
buton.mousePressed(gameState0)
b.mousePressed(restart)
}
if(gameState===4){
buton2.mousePressed(gameState00)


}
if(gameState===5){
if(frameCount%2===0){
  gameState=0
}



}

drawSprites();

fill("white")
stroke(60)
textSize(30)
text("00:"+contador,563,90)

textSize(43)
text(""+score,563,49)
text(""+score2,613,49)
}
function gameState3(){
  clickSound.play()
  buton=createButton('▶')
  buton.position(1220,510)

b=createButton('↺')
b.position(1130,510)

gameState=3

ball.isStatic=true
car.isStatic=true
car2.isStatic=true
}




function gameState0(){
  clickSound.play()

  buton=createButton('| |')
  buton.position(1220,510)

gameState=0
ball.isStatic=false
car.isStatic=false
car2.isStatic=false
score=score
flechas.visible=false
  m.visible=false
  awd.visible=false
  r.visible=false
  control.visible=false
  b.position(1000,-5000)

}
function controls(){
  clickSound.play()

flechas.visible=true
m.visible=true
awd.visible=true
r.visible=true
control.visible=true
ball.isStatic=true
car.isStatic=true
car2.isStatic=true
gameState=4

}
function gameState00(){
  clickSound.play()

gameState=0
  ball.isStatic=false
  car.isStatic=false
  car2.isStatic=false
  flechas.visible=false
  m.visible=false
  awd.visible=false
  r.visible=false
  control.visible=false
  buton=createButton('| |')
buton.position(1220,510)
buton2.position(1293,510);


}
function restart(){
  clickSound.play()

gameState=5

Body.setPosition( car, {x:960,y:50});
Body.setVelocity( car, {x: 0, y: 0.5});
Body.setPosition( car2, {x:160,y:50});
Body.setVelocity( car2, {x: 0, y: 0.5});

Body.setPosition(ball,{x:550, y:50})
Body.setVelocity( ball, {x: 0, y: 0.5});
score=0
score2=0
contador=60
b.position(1000,-5000)
ball.isStatic=false
  car.isStatic=false
  car2.isStatic=false
  flechas.visible=false
  m.visible=false
  awd.visible=false
  r.visible=false
  control.visible=false

buton=createButton('| |')
buton.position(1220,510)

}
function gameState2(){
  buton=createButton('↺')
  buton.position(1220,510)
  buton2.position(1000,-5000)

  
  }
  function gameState000(){
contador=60
    clickSound.play()
score=0
score2=0
    gameState=0
      ball.isStatic=false
      car.isStatic=false
      car2.isStatic=false
      flechas.visible=false
      m.visible=false
      awd.visible=false
      r.visible=false
      control.visible=false
      pw1.visible=false
      pw2.visible=false
      empate.visible=false
      buton=createButton('| |')
    buton.position(1220,510)
    buton2.position(1293,510);
    Body.setPosition( car, {x:960,y:50});
    Body.setVelocity( car, {x: 0, y: 1});
    Body.setPosition( car2, {x:150,y:50});
    Body.setVelocity( car2, {x: 0, y: 1});

Body.setPosition(ball,{x:550, y:50})
Body.setVelocity( ball, {x: 0, y: 1});


  }