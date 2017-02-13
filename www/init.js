var pjs = new PointJS('2d', 400, 400),
  game = pjs.game,
  point = pjs.vector.point,
  log = pjs.system.log,
  touch = pjs.touchControl,
  brush = pjs.brush,
  oop = pjs.OOP,
  vector = pjs.vector.v2d,
  size = pjs.vector.size;
    

pjs.system.initFullPage();
touch.initTouchControl();

var height = pjs.system.getWH().h,
  width = pjs.system.getWH().w,
  score = 0;

var gameOver = function() {
  return game.setLoop('Game Over');
};