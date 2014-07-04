(function() {

  'use strict';

  // list out the vars
  var btns = document.querySelectorAll('.btn-start'),
      vd = getId('video-dialog'),
      a = getId('asdf'),
      close = getId('video-close'),
      player = getId('video-player'),
      modalOpen = false,
      i,
      vdSource,
      lastFocus;


  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id);
  };


// find all elements within a parent that we wante to be focusable
// store them in an array
// find out which one is currently focused, and on tab
// then focus on the next one.
//
// if


  // only allow tabbing between nodes in an active modal window
  function focusRestrict ( event ) {

    if ( event.keyCode === 9 && modalOpen ) {
      // queryselectorall returns our node list of elements that can be focusable
      // but but the node list it produces is not actually an array
      var list = vd.querySelectorAll("button, input, a, iframe"),
          // grab the slice method from the Array prototype,
          // .call is invoking the slice function to fire on 'list',
          // even though list doesn't have that function by default
          focusable = Array.prototype.slice.call( list ),
          listLength = list.length,
          focused = document.activeElement,
          // tells us the position of the currently focused element in the
          // list we have
          focusIndex = focusable.indexOf( focused ),
          nextIndex;

        if ( focusIndex < listLength - 1 && !event.shiftKey ) {
          nextIndex = focusIndex + 1;
        } else if ( focusIndex > 0 && event.shiftKey ) {
          nextIndex = focusIndex -1;
        } else if ( focusIndex === listLength -1 && !event.shiftKey ) {
          nextIndex = 0;
        } else {
          nextIndex = listLength -1;
        }

        console.log(focusable[nextIndex].nodeName);
        focusable[nextIndex].focus();
        event.preventDefault();
    }
  };


  // Let's open the modal
  function modalShow () {
    lastFocus = document.activeElement; // keep track of what was last focused
    lastFocus.blur(); // now unfocus that last element
    vd.setAttribute('aria-hidden', 'false'); // give assistive visibility
    modalOpen = true; // used for esc key functionality
    close.focus();
    vd.setAttribute('tabindex', '0');
  };


  // set a modal to hide
  function modalNoShow () {
    vd.setAttribute('aria-hidden', 'true');
    vd.setAttribute('tabindex', '-1');
    modalOpen = false;
    unsetVid();
  };


  // set the source of the video in a modal window
  // as well as placing focus on the video player (iframe)
  // if no source is passed, the else statement passes no src, and blurs focus
  function setVid ( vidSrc ) {
    player.src=vidSrc;
  }


  // unset a video source
  // (so as not to keep playing when a modal window is closed)
  function unsetVid () {
    lastFocus.focus();
    player.src='#!';
  };


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function modalClose ( event ) {
    if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      modalNoShow();
    }
  };


  // Add an event listener to all buttons that will load the modal.
  // Grab the video source url from the data-src attribute, so we don't have to
  // create or delete a JS function if we decide to add or remove video buttons
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      modalShow();
      vdSource = this.getAttribute('data-src');
      setVid(vdSource);
    });
  };


  // close modal by btn
  close.addEventListener('click', modalClose);

  // close modal by keypress, but only if modal is open
  document.addEventListener('keydown', modalClose);

  //
  window.addEventListener('keydown', focusRestrict);

})();
