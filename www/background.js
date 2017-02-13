var bg = [], oldB;
oop.forInt(4, function(i) {
  oldB = game.newImageObject({
    file: "img/bg.png",
    h: height,
    onload : function() {
      this.x = this.w * i;
    }
  });
  bg.push(oldB);
});

var gr = [], oldG;
oop.forInt(25, function(i) {
  oldG = game.newImageObject({
    file: "img/ground.png",
    w: width / 2,
    onload : function() {
      this.x = this.w * i;
      this.y = -this.h + height*1.2;
    }
  });
  gr.push(oldG);
});

var drawBG = function() {
  oop.forArr(bg, function(elem) {
    elem.draw();
    elem.move(point(-0.6, 0));
    if (elem.x + elem.w < 0) {
      elem.x = oldB.x + oldB.w;
      oldB = elem; 
    }
  });
};

var drawGR = function() {
  oop.forArr(gr, function(elem) {
    elem.draw();
    elem.move(point(-2, 0));

    if (elem.x + elem.w < 0) {
      elem.x = oldG.x + oldG.w;
      oldG = elem; 
    }

//    if (elem.isInCamera()) {
//      if (elem.isIntersect(bird)) {
//        gameOver();
//      } 
//    }
  });
};