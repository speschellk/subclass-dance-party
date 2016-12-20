// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log('dancer step test');
  // console.log('this is ' + this);
  // console.log(MakeDancer.prototype.step);
  // console.log(this.timeBetweenSteps);
  setTimeout(function() {
    MakeDancer.prototype.step.call(this); 
  }
  , this.timeBetweenSteps);

};

// var dancer = new MakeDancer(10, 10, 5);
// console.log('dancer is ' + dancer);

//console.log('this is ' + this);
// dancer.step();
// console.log('dancer step called');



MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // console.log('node is ' + this.$node);
};

// console.log('dancer is ' + dancer);
// dancer.setPosition(this.top, this.left);