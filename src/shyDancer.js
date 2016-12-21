var MakeShyDancer = function(top, left, timeBetweenSteps) {
  top = 1000;
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img class="shy" src="assets/sloths/knowingSloth.png">');
};

MakeShyDancer.prototype = Object.create(MakeDancer.prototype);
MakeShyDancer.prototype.constructor = MakeShyDancer;

MakeShyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  
  // Shy Sloth makes an appearance at the rager only when there are fewer
  // than 10 other sloths there. He disappears when too many other sloths arrive.
  if (window.dancers.length < 10) {
    this.$node.animate({marginTop: '-=300px'}, {duration: 500});
    this.$node.animate({marginTop: '+=300px'}, {duration: 500});
  } else {
    this.$node.fadeOut();
  }
};