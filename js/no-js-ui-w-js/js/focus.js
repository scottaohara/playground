(function() {

    "use strict";

    // declare all the variables
    var newBtns = qsa('.check-label'),
        ariaShowHide = qsa('.aria-show-hide'),
        exitBtns = qsa('.exit-label'),
        openBtns = qsa('.open-label'),
        sections = qsa('.section-container'),
        i;


    // write less when needing to use querySelectorAll
    function qsa ( selector ) {
      return document.querySelectorAll( selector );
    };


    // reusable function to call in setting aria-hidden to true
    function ariaHide ( e ) {
      // if (this.className === "exit-label") {
      //   ariaShowHide[i].setAttribute('aria-hidden', 'true');
      // }
      // else {
        for (i = 0; i < ariaShowHide.length; i++) {
          ariaShowHide[i].setAttribute('aria-hidden', 'true');
        }
      // }
    };


    // Put all open tabs that were at -1 tab index back to 1
    function resetIndex ( e ) {
      for (i = 0; i < openBtns.length; i++) {
        openBtns[i].setAttribute('tabindex', '1');
      }
      for (i = 0; i < exitBtns.length; i++) {
        exitBtns[i].setAttribute('tabindex', '-1');
      }
    };


    // Put all open tabs that were at -1 tab index back to 1
    function negativeTabs ( e ) {
      for (i = 0; i < openBtns.length; i++) {
        openBtns[i].setAttribute('tabindex', '-1');
      }
    };



    // Find the current section. On click of the open-label within
    // that section, find the aria-show-hide within that section and set
    // it to false

    function ariaShow ( e ) {
      for (i = 0; i < openBtns.length; i++) {

        openBtns[i].addEventListener('click', function( e ) {

          // find 'this' label btn
          var n = this,
              p = this;

          // set this to tabindex -1
          n.setAttribute('tabindex', '-1');

          // find next node that is not text (the content div)
          // and set the aria-hidden to false
          do n = n.nextSibling;
          while ( n && n.nodeType != 1 );
          n.setAttribute('aria-hidden', 'false');


          // THEN go up one more node and set the tabindex for
          // the close label to 1
          do p = p.previousSibling;
          while ( p && p.nodeType != 1 );
          n.setAttribute('tabindex', '1');

        });
      }

    };

    function ariaShowKey ( e ) {
      for (i = 0; i < openBtns.length; i++) {

        openBtns[i].addEventListener('keydown', function( e ) {

          if ((e.keyCode === 13) || (e.keyCode === 32)) {
            // find 'this' label btn
            var n = this;

            // find next node that is not text (the content div)
            // and set the aria-hidden to false
            do n = n.nextSibling;
            while ( n && n.nodeType != 1 );
            n.setAttribute('aria-hidden', 'false');

            // then go back up one level and set the tab-index of
            // the btn we just clicked to be -1
            do n = n.previousSibling;
            while ( n && n.nodeType != 1 );
            n.setAttribute('tabindex', '-1');

            // THEN go up one more node and set the tabindex for
            // the close label to 1
            do n = n.previousSibling;
            while ( n && n.nodeType != 1 );
            n.setAttribute('tabindex', '1');
          }
        });
      }

    };

    ariaShow();
    ariaShowKey();


    // when tabbing through 'open' labels, on press of enter or space
    // target appropriate label and 'click' it to fire off paired
    // radio checked state
    for (i = 0; i < openBtns.length; i++) {
      openBtns[i].addEventListener('keydown', function( e ) {

        if ((e.keyCode === 13) || (e.keyCode === 32)) {
          document.getElementById(e.target.getAttribute('for')).click();
          negativeTabs();

        }
      });
    }




    // when specifically clicking a exit label, make sure to
    // set the aria-hidden attribute for it's parent aria container
    // to 'true'
    for (i = 0; i < exitBtns.length; i++) {
      // if you click the btns, close and aria hide
      exitBtns[i].addEventListener('click', function() {
        ariaHide.call(this); // applies just to 'this'
        resetIndex();
      });

      exitBtns[i].addEventListener('keydown', function( e ) {

        if ((e.keyCode === 13) || (e.keyCode === 32)) {
           document.getElementById(e.target.getAttribute('for')).click();
           ariaHide.call(this);
           resetIndex();
        }
      });

    }


    // if clicking escape at any time when a content window is open,
    // hide content
    document.addEventListener('keydown', function( e ) {
      if ((e.keyCode === 27)) {
        // select the closer label and "click it"
        // setting the focus to the exit radio and closing
        // the modal window
        document.getElementById('closer').click();

        // find all divs with the class .aria-show-hide and set
        // the aria hidden attribute to "true"
        ariaHide();

        // Set tabs back to 1
        resetIndex();
      }
    });


})();
