var MakeHulaDancer = function (top, left, timeBetweenSteps) {
  top = '60%';
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="assets/sloths/hoopsloth.png">');
};

MakeHulaDancer.prototype = Object.create(MakeDancer.prototype);
MakeHulaDancer.prototype.constructor = MakeHulaDancer;

MakeHulaDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  
  this.$node.animate({marginLeft: '+=80px'}, {duration: 500});  
  this.$node.animate({marginLeft: '-=80px'}, {duration: 500});
};