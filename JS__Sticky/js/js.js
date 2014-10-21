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


  // Scrolly Function
  function scrolly () {
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

  // Listen to scroll function
  window.addEventListener( 'scroll', scrolly );


  // TODO
  function stickySupport () {
    // function to see if sticky is supported
  }

})(document);
