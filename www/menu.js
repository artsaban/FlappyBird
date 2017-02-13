var Menu = function() {

  this.update = function() {
    drawBG();
    bird.draw();
    drawGR();

    brush.drawText({
      x: width / 2,
      y: bird.y - 2*bird.h,
      text: 'FlappyBird',
      size: 30,
      color: "white",
      align: 'center',
      font: 'flappyFont'
    });

    if (touch.isPress()) {
      return game.setLoop("game");
    }
  };
  
};