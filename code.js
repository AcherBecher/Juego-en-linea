var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7a8a126f-74dc-4aa3-b424-5086cc1d1e33","7a55c2e8-c3b8-4033-95e7-4086ff53faac","4f636dae-c1f9-4a41-a1aa-807451379bba"],"propsByKey":{"7a8a126f-74dc-4aa3-b424-5086cc1d1e33":{"name":"ball","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"p00VJx16RGdO1Ti5EqrAIzmXBzLVI9wQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/7a8a126f-74dc-4aa3-b424-5086cc1d1e33.png"},"7a55c2e8-c3b8-4033-95e7-4086ff53faac":{"name":"playerPaddle","sourceUrl":"assets/v3/animations/elPWyL6q4a8W1twlU6VhGBr0jVMRxLDBRdmRNqfN9_U/7a55c2e8-c3b8-4033-95e7-4086ff53faac.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"r4ilDWHbjY2ZOnRpEwPzS1SkewaRPJY3","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/elPWyL6q4a8W1twlU6VhGBr0jVMRxLDBRdmRNqfN9_U/7a55c2e8-c3b8-4033-95e7-4086ff53faac.png"},"4f636dae-c1f9-4a41-a1aa-807451379bba":{"name":"computerPaddl","sourceUrl":"assets/v3/animations/elPWyL6q4a8W1twlU6VhGBr0jVMRxLDBRdmRNqfN9_U/4f636dae-c1f9-4a41-a1aa-807451379bba.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"Tb.WvAk_YM2L.gBOimqjo.tyZkv2wHW1","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/v3/animations/elPWyL6q4a8W1twlU6VhGBr0jVMRxLDBRdmRNqfN9_U/4f636dae-c1f9-4a41-a1aa-807451379bba.png"}}};
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

var playerPaddle= createSprite(360,200,10,70);
    playerPaddle.setAnimation("playerPaddle")
    var computerPaddle= createSprite(20,200,10,70);
    computerPaddle.setAnimation("computerPaddl")
    var ball= createSprite(200,200,10,10); 
    ball.setAnimation("ball")
   var puntuación=0;
    
function draw() {
  background(220);
  textSize(20);
  fill("black");
  
  text("Puntuación:"+puntuación, 220, 30);

  
  
 if(keyDown("up")){
   playerPaddle.y=playerPaddle.y-10;
 }
 if(keyDown("down")){
   playerPaddle.y=playerPaddle.y+10;
 }
 if(keyDown("space")){
   ball.velocityX=5;
   ball.velocityY=6;
 }
 if (ball.isTouching(computerPaddle)||ball.isTouching(playerPaddle)) {
   playSound("assets/category_accent/puzzle_game_accent_b_03.mp3")
 } else {
   
 }
 
 for (var num = 0; num <= 400; num+=20) {
   line(200,num,200,num+10)
 }
 
 
 computerPaddle.y=ball.y;


  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
 playerPaddle.bounceOff(topEdge);
 playerPaddle.bounceOff(bottomEdge);
 computerPaddle.bounceOff(topEdge);
 computerPaddle.bounceOff(bottomEdge);
  
}
function drawnet() {
  for (var num = 0; num <= 400; num+=20) {
   line(200,num,200,num+10)
 }
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
