;(function ( w, doc ) {

  // Enable strict mode
  "use strict";


  // Local object for method references
  var DropNav = {};


  // Namespace it up yo
  DropNav.ns = "Drop Navigation";


  // the main event...err..function
  DropNav.init = function () {

    var hasDrop      = doc.querySelectorAll('.has-drop'),
        hasDropLinks = doc.querySelectorAll('.nav__list__drop a'),
        hasDropCount = hasDrop.length,
        hasDropLinksCount = hasDropLinks.length,
        i;

    if ( hasDropCount > 0 ) {

      for ( i = 0; i < hasDropCount; i = i + 1 ) {

        var drop = hasDrop[i];

        drop.setAttribute('aria-haspopup', 'true');
        drop.querySelector('ul').setAttribute('aria-label', 'Sub Menu');

      } //for

      for ( i = 0; i < hasDropLinksCount; i = i + 1 ) {

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
