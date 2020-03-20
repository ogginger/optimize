//test_optimize.js: Testing Logic.

define(["tests/optimize_simple_ReturnsOptimization","TestSuite","log"], function(optimize_simple_ReturnsOptimization,TestSuite,log) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_optimize initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "optimize" );
      xTestSuite.add([
        optimize_simple_ReturnsOptimization
      ]);
      xTestSuite.test();
    }
  });
});