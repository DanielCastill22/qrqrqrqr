var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var wall1=createSprite(200,25,400,50)
 var wall2=createSprite(400,150,100,100) 
 var wall3=createSprite(400,350,100,100)
 var wall4=createSprite(350,375,100,50)
 var wall5=createSprite(100,375,200,50) 
 var wall6=createSprite(25,350,50,100)
 var wall7=createSprite(25,150,50,100)
 var wall8=createSprite(150,125,300,50)
 var wall9=createSprite(275,200,50,200)
 var wall10=createSprite(125,250,50,100)
 var wall11=createSprite(250,400,100,50)
 var wall12=createSprite(0,250,50,100)
 var wall13=createSprite(400,250,50,100)
 var wall14=createSprite(400,75,50,100)
 var wall15=createSprite(0,75,50,100)
 var wall16=createSprite(200,262,100,25)
 
 var cube=createSprite(75,75,15,15)
 
 var achievement=createSprite(200,200,20,20)
 achievement.shapeColor="yellow"
 
 
 var redboi1=createSprite(325,200,28,28)
 redboi1.shapeColor="red"
 var redboi2=createSprite(200,325,28,28)
 redboi2.shapeColor="red"
 var redboi3=createSprite(75,250,28,28)
 redboi3.shapeColor="red"
 
 redboi1.setVelocity(0,-10);
 redboi2.setVelocity(10,0);
 redboi3.setVelocity(0,-10);

 function draw() {
background("white")
drawSprites()

fill("blue")
stroke("blue")
  textSize(20);
    text("watch out for the red dots",150,25);
    
fill("blue")
stroke("blue")
  textSize(20);
    text("safe spaces! --->",40,375);
    
fill("blue")
stroke("blue")
  textSize(20);
    text("this is your objective",100,180);

   if (keyDown("RIGHT_ARROW")) {
    cube.x=cube.x +5
  }

if (keyDown("LEFT_ARROW")) {
    cube.x=cube.x -5
  }
    
if (keyDown("UP_ARROW")) {
    cube.y=cube.y -5
  }
  
if (keyDown("DOWN_ARROW")) {
    cube.y=cube.y +5
  
  }
  
  
  
  redboi1.bounceOff(wall1)
  redboi1.bounceOff(wall4)
  
  redboi2.bounceOff(wall3)
  redboi2.bounceOff(wall6)
  
  redboi3.bounceOff(wall5)
  redboi3.bounceOff(wall8)
  
 
  
 if (cube.isTouching(redboi1)||cube.isTouching(redboi2)||cube.isTouching(redboi3)) {
    cube.x=75;
    cube.y=75;
    playSound("assets/category_alerts/retro_game_alert_2.mp3")
  }
  
  if (cube.isTouching(achievement)) {
    cube.x=75;
    cube.y=75;
    playSound( "assets/category_achievements/vibrant_game_postive_achievement_2.mp3")
  }
  
   
  cube.bounceOff(wall1)
  cube.bounceOff(wall2)
  cube.bounceOff(wall3)
  cube.bounceOff(wall4)
  cube.bounceOff(wall5)
  cube.bounceOff(wall6)
  cube.bounceOff(wall7)
  cube.bounceOff(wall8)
  cube.bounceOff(wall9)
  cube.bounceOff(wall10)
  cube.bounceOff(wall11)
  cube.bounceOff(wall12)
  cube.bounceOff(wall13)
  cube.bounceOff(wall14)
  cube.bounceOff(wall15)
  cube.bounceOff(wall16)
  

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
