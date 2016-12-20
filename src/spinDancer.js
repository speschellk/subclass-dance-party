var MakeSpinDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="/Users/student/Desktop/hrsf53-subclass-dance-party/assets/sloths/raisedaroofsloth.png">');
};

MakeSpinDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinDancer.prototype.constructor = MakeSpinDancer;

MakeSpinDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // spin action
  this.$node.toggle();
};