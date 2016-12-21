describe('Dancers', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });


  describe('Blinky Dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('Hula Dance', function() {
    
    var hulaDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      hulaDancer = new MakeHulaDancer(10, 20, timeBetweenSteps);
    });

    it('should have a step function that makes it slide from side to side', function() {
      sinon.spy(hulaDancer.$node, 'animate');
      hulaDancer.step();
      expect(hulaDancer.$node.animate.called).to.be.true;
    });
  });

  describe('Narwhal Rocket', function() {
    
    var rocketDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      rocketDancer = new MakeRocketDancer(10, 20, timeBetweenSteps);
    });

    it('should have a step function that makes it fly', function() {
      sinon.spy(rocketDancer.$node, 'animate');
      rocketDancer.step();
      expect(rocketDancer.$node.animate.called).to.be.true;
    });
  });
});