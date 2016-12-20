var MakeHulaDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="/Users/student/Desktop/hrsf53-subclass-dance-party/assets/sloths/hoopsloth.png">');
};

MakeHulaDancer.prototype = Object.create(MakeDancer.prototype);
MakeHulaDancer.prototype.constructor = MakeHulaDancer;

MakeHulaDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  //some action
  this.$node.animate({marginLeft: '+=80px'}, {duration: 500});  
  this.$node.animate({marginLeft: '-=80px'}, {duration: 500});
};