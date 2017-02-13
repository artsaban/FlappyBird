var blocks = [],
  oldBlock = false,
  space = 50;

var addBlock = function(center) {

  var dX = oldBlock ? oldBlock.top.x + pjs.math.random(200, 250) : width;

  var top = game.newImageObject({
    file: "img/tube_52_320.png",
    x: dX,
    w: width / 12,
    onload: function() {
      this.y = center - space - this.h;       
    }
  });

  var bottom = game.newImageObject({
    file: "img/tube_52_320.png",
    x: dX,
    w: width / 12,
    angle: 180,
    onload : function() {
      this.y = center + space;
    },
  });
  
   var checkpoint = game.newBaseObject({
    x: dX + top.w / 1.1,
    w: 0,
    h: height,
    userData: {
      flag: false
    }
  });
  
  var block = {
    'top': top,
    'bottom': bottom,
    'checkpoint': checkpoint
  };

  oldBlock = block;
  blocks.push(block);
};

oop.forInt(10, function() {
  addBlock(pjs.math.random(space*1.5, height - space*2));
});

var drawBlocks = function() {
  oop.forArr(blocks, function(elem) {
    elem.top.draw();
    elem.bottom.draw();
//    elem.checkpoint.drawStaticBox();
    elem.top.move(point(-2, 0));
    elem.bottom.move(point(-2, 0));
    elem.checkpoint.move(point(-2, 0));

    if (elem.top.x + elem.top.w < 0) {
      elem.top.x = elem.bottom.x = oldBlock.top.x + oldBlock.top.w + pjs.math.random(200, 250);
      elem.checkpoint.x = elem.top.x + elem.top.w;
      elem.checkpoint.flag = false;
      oldBlock = elem;
    }

    if (elem.top.isInCamera()) {
      if (elem.top.isIntersect(bird) || elem.bottom.isIntersect(bird)) {
        gameOver();
      }
      if (elem.checkpoint.isIntersect(bird) && !elem.checkpoint.flag) {
        elem.checkpoint.flag = true;
        score += 1;
      }
    }
  });
};