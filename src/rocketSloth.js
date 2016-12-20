var MakeRocketDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.left = '0';
  this.$node.append('<img src="/Users/student/Desktop/hrsf53-subclass-dance-party/assets/sloths/narwhal.png">');
};

MakeRocketDancer.prototype = Object.create(MakeDancer.prototype);
MakeRocketDancer.prototype.constructor = MakeRocketDancer;

MakeRocketDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // action
  this.$node.animate({left: '-650'});
  // this.$node.toggle();
};