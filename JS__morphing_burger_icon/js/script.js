(function() {

  // set what element is that we are going to be swapping
  // the data state on
  var btn = document.querySelector('.btn-wrapper');

  // set initial aria-pressed state for button
  btn.setAttribute('aria-pressed', 'false');


  // Toggle between data state one and two
  // toggleState function works in IE7 +
  var toggleState = function ( elm, att, stateOne, stateTwo ) {
    var elm = document.querySelector(elm);
    elm.setAttribute(att, elm.getAttribute(att) === stateOne ? stateTwo : stateOne);
  };


  // toggle states on click
  btn.onclick = function(e) {
    toggleState('.btn-burger', 'data-state', 'off', 'on');
    toggleState('.btn-wrapper', 'aria-pressed', 'false', 'true');
    e.preventDefault();
  }

})();
