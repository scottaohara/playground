(function() {

  'use strict';

  // list out the vars
  var btns = document.querySelectorAll('.btn-start'),
      vd = getId('video-dialog'),
      close = getId('video-close'),
      player = getId('video-player'),
      modalOpen = false,
      i,
      vdSource,
      index,
      lastFocus;


  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id);
  };


  // function to set a tab index for when
  // buttons should be focusable or not
  function opens( index ) {
    for (i = 0; i < btns.length; i++) {
      btns[i].tabIndex = index;
    }
  };


  // Let's open the modal
  function modalShow () {
    lastFocus = document.activeElement; // keep track of what was last focused
    lastFocus.blur(); // now unfocus that last element
    vd.setAttribute('aria-hidden', 'false'); // give assistive visibility
    modalOpen = true; // used for esc key functionality
    opens(-1); // set
  };


  // set a modal to hide
  function modalNoShow () {
    vd.setAttribute('aria-hidden', 'true');
    modalOpen = false;
    opens(0);
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

})();
