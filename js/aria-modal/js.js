(function() {

  'use strict';

  // list out the vars
  var btns = qsa('.btn-start'),
      rModal = qsa('.m-reg'),
      vModal = qsa('.m-video'),
      modal = getId('modal-dialog'),
      close = getId('modal-close'),
      mTitle = getId('modal-title'),
      mContent = getId('modal-content'),
      mHolder = getId('modal-holder'),
      modalOpen = false,
      unRestrict = true,
      player,
      vSource,
      lastFocus,
      i;


  // Let's cut down on what we need to type to get:
  // an ID
  function getId ( id ) {
    return document.getElementById(id);
  }

  // selectors (all)
  function qsa ( string ) {
    return document.querySelectorAll( string );
  }


  // find all elements within a parent that we want to
  // be focusable & store them in an array
  //
  // find out which one is currently focused
  // On tab / shift tab, focus on the next one / previous one
  function focusRestrict ( event ) {
    if ( event.keyCode === 9 && modalOpen && unRestrict === true ) {
      // queryselectorall returns our node list of elements that can be focusable
      // but the node list it produces is not actually an array
      var list = modal.querySelectorAll("button, input, a, video, audio, iframe, embed, object, [tabindex]"),
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

        // meet all the conditions!
        if ( focusIndex < listLength - 1 && !event.shiftKey ) {
          nextIndex = focusIndex + 1;
        } else if ( focusIndex > 0 && event.shiftKey ) {
          nextIndex = focusIndex -1;
        } else if ( focusIndex === listLength -1 && !event.shiftKey ) {
          nextIndex = 0;
        } else {
          nextIndex = listLength -1;
        }

        focusable[nextIndex].focus();
        event.preventDefault();
    }
  }


  // Let's open the modal
  function modalShow () {
    lastFocus = document.activeElement; // keep track of what was last focused
    lastFocus.blur(); // now unfocus that last element
    modal.setAttribute('aria-hidden', 'false'); // give assistive visibility
    modalOpen = true; // used for esc key functionality
    mHolder.focus();
    mHolder.setAttribute('tabindex', '0');
    document.body.style.overflow = "hidden";
  }


  // set a modal to hide
  function modalNoShow () {
    modal.setAttribute('aria-hidden', 'true');
    mHolder.setAttribute('tabindex', '-1');
    modalOpen = false;
    document.body.removeAttribute('style');
    mContent.innerHTML = '';
  }


  // set the source of the video in a modal window
  // as well as placing focus on the video player (iframe)
  // if no source is passed, the else statement passes no src, and blurs focus
  function setVid ( vidSrc ) {
    unRestrict = false;
    player.src=vidSrc;
  }


  // binds to both the button click and the escape key to close the modal window
  // but only if modalOpen is set to true
  function modalClose ( event ) {
    if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
      modalNoShow();
      lastFocus.focus();
      // refocus on the last element that was in focus before
      // mocal window opened
    }
  }



  // Add an event listener to all buttons that will load the modal.
  // Grab the video source url from the data-src attribute, so we don't have to
  // create or delete a JS function if we decide to add or remove video buttons
  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      // fire the modal show function
      modalShow();
      // grab the data-modal-title attribute value and set it as the
      // innerHTML of the mTItle (the heading in the modal window)
      mTitle.innerHTML = this.getAttribute('data-modal-title');
    });
  };


  // on click of a 'regular content'
  // i.e. not video iframe
  // grab the value of the 'data-for' attribute and match it up
  // with the corresponding <template> id value.
  // assign the innerHTML of the template to the innerHTML of mContent
  // to view the template's content within the modal box.
  for (i = 0; i < rModal.length; i++) {
    rModal[i].addEventListener('click', function () {
      mContent.innerHTML = getId(this.getAttribute('data-for')).innerHTML;
    });
  };


  // "video" content modal
  for (i = 0; i < vModal.length; i++) {
    vModal[i].addEventListener('click', function () {
      // first get the innerHTMl of the <template> with the id="mv"
      mContent.innerHTML = getId('mv').innerHTML;
      // now that 'mv' is in the DOM, get the ID
      // of the iframe and assign it to 'player'
      player = getId('modal-player');
      // grab the video source that's in the data-src attribute of
      // the button that was clicked (this)
      vSource = this.getAttribute('data-src');
      // Call the setVid source function and pass in the vSource
      // variable (which is the url of the movie)
      setVid(vSource);
      // focus on the modal video content holder by default
      mHolder.focus();
    });
  };


  // close modal by btn
  close.addEventListener('click', modalClose);

  // close modal by keypress, but only if modal is open
  document.addEventListener('keydown', modalClose);

  // restrict tab focus on elements only inside modal window
  window.addEventListener('keydown', focusRestrict);

})();
