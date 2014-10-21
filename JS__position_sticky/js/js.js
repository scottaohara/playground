;(function (){

  'use strict';

  /*
      Add / Remove Class Functions

      classList only works in IE 10+
      These have been tested to work in IE 8+
  */

  // Add Class
  function addClass( e, newClass ) {
    e.className += ' ' + newClass;
  }

  // Remove Class
  function removeClass( e, deleteClass ) {
    e.className = e.className.replace(new RegExp("\\b" + deleteClass + "\\b", 'g'), '').trim();
  }


  // Variables
  var body = document.querySelector('body'),
      sticky = document.querySelector('.sticky'),
      stickyBlock = sticky.getBoundingClientRect(),
      stickyHeight = stickyBlock.height + 'px;',
      isPadded = false;

  var isStickySupported = (function( e ) {
     try {
          e.style.position = 'sticky';
          return e.style.position === 'sticky';
     }
     catch( c ) {
         return false;
     }
  })(document.createElement('div'));


  // Scrolly Function
  function scrolly () {

    console.log('ohhi');
    if ( window.pageYOffset >= stickyBlock.top && !isPadded ) {
      addClass( sticky, 'sticky-fix' );
      body.setAttribute('style', 'padding-top:' + stickyHeight)
      isPadded = true;
    }
    else if ( window.pageYOffset < stickyBlock.top && isPadded ) {
      removeClass( sticky, 'sticky-fix' );
      body.removeAttribute('style');
      isPadded = false;
    }
  }

  // only run scrolly if sticky isn't supported
  if ( isStickySupported === false ) {
    // Listen to scroll function
    window.addEventListener( 'scroll', scrolly );
  }


})(document);
