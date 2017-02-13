var bird = game.newAnimationObject({
  w: 34, h: 24,
  scale: height / 300,
  positionC: point(width / 2, height / 2),
  animation : pjs.tiles.newAnimation("img/bird.png", 34, 24, 4),
  delay: 4,
  userData: {
    dy: 0
  }
});

bird.setBox({
  offset: point(5, 3),
  size: size(-11, -10)
});