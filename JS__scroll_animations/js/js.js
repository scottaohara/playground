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


  // Postion Fix + fade in navigation after scrolling far enough down the page
  // Put it back the way it was when you get close to the top again
  var main  = document.getElementById('body'),
      nav   = document.querySelector('.nav'),
      navHeight = nav.offsetHeight,
      applied = false;

  function showAgain () {

    var toTop = document.documentElement.scrollTop;

    if ( applied == false ) {
      if ( toTop >= (navHeight * 2) ) {
        addClass( nav, 'fixed fade-in-quick');
        main.setAttribute( 'style', 'padding-top:' + navHeight + 'px' );
        applied = true;
      }
    }
    else if ( applied && toTop <= navHeight  ) {
      removeClass( nav, 'fixed fade-in-quick' );
      main.removeAttribute( 'style' );
      applied = false;
    }

  }

  document.addEventListener( 'scroll', showAgain );



  // Set up add/remove class triggers on whether or not elements
  // are within the visiable viewport


  var isVisible = document.querySelectorAll('.js-peekaboo'),
      i;

  // Check if an element is visible in the viewport
  function ohHi( e ) {
    var rect = e.getBoundingClientRect(),
        html = document.documentElement;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
       rect.bottom <= ( window.innerHeight || html.clientHeight ) &&
       rect.right <= ( window.innerWidth || html.clientWidth )
    );
  }


  function peekaboo ( e ) {
    if ( ohHi( e ) ) {

      if ( e.classList.contains('placeholder--top') ) {
        addClass( e, 'slide-in--top');
        removeClass( e, 'placeholder--top' );
      }

      if ( e.classList.contains('placeholder--left') ) {
        addClass( e, 'slide-in--left');
        removeClass( e, 'placeholder--left' );
      }

      if ( e.classList.contains('placeholder--bottom') ) {
        addClass( e, 'slide-in--bottom');
        removeClass( e, 'placeholder--bottom' );
      }

      if ( e.classList.contains('placeholder--right') ) {
        addClass( e, 'slide-in--right');
        removeClass( e, 'placeholder--right' );
      }
    }
  }


  document.addEventListener('scroll', function () {
    for ( i = 0; i < isVisible.length; i++ ) {
      peekaboo( isVisible[i] );
    }
  });



})(document);
