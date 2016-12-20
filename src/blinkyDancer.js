var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  console.log(this.$node);
  this.$node.append('<img src="/Users/student/Desktop/hrsf53-subclass-dance-party/assets/sloths/creepsloth.png">');
  console.log(this.$node);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};