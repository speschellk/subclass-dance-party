var MakeRocketDancer = function(top, left, timeBetweenSteps) {
  if (top < 600) {
    top = top;
  } else {
    top = 300;
  }
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.left = '0';
  this.$node.append('<img class="narwhal" src="/Users/student/Desktop/hrsf53-subclass-dance-party/assets/sloths/narwhal.png">');
};

MakeRocketDancer.prototype = Object.create(MakeDancer.prototype);
MakeRocketDancer.prototype.constructor = MakeRocketDancer;

MakeRocketDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // action
  this.$node.animate({left: '-700'});
  // this.$node.toggle();
};