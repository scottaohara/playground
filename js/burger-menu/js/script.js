(function() {

  // Method to change states which works in IE7+ / IE8+
  // set what element is that we are going to be swapping
  // the data state on
  var btn = document.querySelector('.btn-wrapper');

  // Toggle between data state one and two
  var toggleState = function(elm, one, two) {
    var elm = document.querySelector(elm);
    elm.setAttribute('data-state', elm.getAttribute('data-state') === one ? two : one);
  };

  // turn active state on or off
  btn.onclick = function(e) {
    toggleState('.btn-burger', 'off', 'on');
    e.preventDefault();
  }

})();
