var Game = function() {
  
  this.update = function() {
    drawBG();
    bird.draw();
    drawBlocks();
    drawGR();

    bird.dy += 0.34;
    bird.y += bird.dy;
    bird.angle = bird.dy;
    
    if (bird.y + bird.h > height) {
      gameOver();
    } 

    if (touch.isPress()) {
      bird.dy = (bird.y > 0) ? -6.5 : 0;
    }

    brush.drawText({
      x: width / 2,
      y: bird.h / 2.5,
      text: score,
      size: 30,
      color: "white",
      align: 'center',
      font: 'flappyFont'
    });
  };

  this.entry = function() {
    blocks = [];
    oldBlock = false;
    oop.forInt(10, function() {
      addBlock(pjs.math.random(space*1.5, height - space*2));
    });
    
    score = 0;
    bird.setPositionC(point(width / 2, height / 2));
    bird.dy = 0;
    
  };
};