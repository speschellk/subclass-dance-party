var MakeSlyDancer = function(top, left, timeBetweenSteps) {
  top = 1000;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img class="sly" src="assets/sloths/knowingSloth.png">');
};

MakeSlyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlyDancer.prototype.constructor = MakeSlyDancer;

MakeSlyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  
  this.$node.animate({marginTop: '-=300px'}, {duration: 500});
  this.$node.animate({marginTop: '+=300px'}, {duration: 500});
};