(function ( w, doc ) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var DropNav = {};

  // Namespace it up yo
  DropNav.ns = "Drop Navigation";

  // the main event...err..function
  DropNav.init = function () {

    var hasDrop = doc.querySelectorAll('.has-drop'),
      hasDropLinks = doc.querySelectorAll('.nav__list__drop a'),
      hasDropCount = hasDrop.length,
      hasDropLinksCount = hasDropLinks.length,
      i;

    if ( hasDropCount > 0 ) {

      for ( i = 0; i < hasDropCount; i++ ) { // i++  =  i = i + 1

        var drop = hasDrop[i],
          firstDropLink = drop.querySelectorAll('.nav__list__drop a')[0];

        drop.setAttribute('aria-haspopup', 'true');
        // drop.querySelector('ul').setAttribute('aria-label', 'Sub Menu');
        firstDropLink.innerHTML = ' <span class="sr-only">Sub menu, </span>' + firstDropLink.innerHTML; //*

      } //for

      for ( i = 0; i < hasDropLinksCount; i++ ) {

        var dropLinks = hasDropLinks[i];

        dropLinks.addEventListener('focus', function ( e ) {
          this.parentNode.parentNode.classList.add('has-focus');
        });

        dropLinks.addEventListener('blur', function ( e ) {
          this.parentNode.parentNode.classList.remove('has-focus');
        });

      } //for

    } //if

  }; //init

  DropNav.init();

})( this, this.document );

/*
  Created Aug 22, 2016

  Revised Aug 23, 2016
  * https://codepen.io/svinkle
  Switched from aria label to adding visually hidden "sub menu" text to the first item in the drop down, to ensure that all screen readers would accurately announce "sub menu"

  Fixed z-index of primary link & drop menu to ensure that the primary link always appeared on top of the drop menu

  Reveal drop menu on focus of primary link, to make it more apparent that a sub menu exists. suppose this could have been done with a down arrow on the primary link. but nope :)
*/
