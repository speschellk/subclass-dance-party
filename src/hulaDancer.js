var MakeHulaDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeHulaDancer.prototype = Object.create(MakeDancer.prototype);
MakeHulaDancer.prototype.constructor = MakeHulaDancer;

MakeHulaDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  //some action
  this.$node.slideToggle();
};