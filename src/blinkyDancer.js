var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  console.log('tests');

  // this.oldStep = this.step;
  // this.step = MakeBlinkyDancer.prototype.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};



MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {

  console.log('finally called the bugger!');
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  //console.log(MakeDancer.prototype.step);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and

  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  console.log('this.$node is ' + this.$node);
};