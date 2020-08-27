"use strict";

function pageTransition() {
  var tl = gsap.timeline();
  tl.to('ul.transition li', {
    duration: .5,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.2
  });
  tl.to('ul.transition li', {
    duration: .5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".left", {
    duration: 1.5,
    translateY: 50,
    opacity: 0
  });
  tl.to("img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
  }, "-=1.1");
}

function delay(n) {
  n = n || 2000;
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [{
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              done = this.async();
              pageTransition();
              _context.next = 4;
              return regeneratorRuntime.awrap(delay(1000));

            case 4:
              done();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              contentAnimation();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    once: function once(data) {
      return regeneratorRuntime.async(function once$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              contentAnimation();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]
});