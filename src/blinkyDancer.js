var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = this.step;
  // console.log('this.oldStep is ' + this.oldStep);
  // this.step = MakeBlinkyDancer.prototype.step;
  // console.log('this.step is ' + this.step);

  // MakeBlinkyDancer.prototype.step.call(this);
  // this.oldStep = MakeBlinkyDancer.prototype.step;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = MakeBlinkyDancer.prototype.step;
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  console.log('finally called the bugger!');
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // MakeDancer.prototype.step.call(this);
  // console.log('test step call');
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  console.log('toggle step called');
};
