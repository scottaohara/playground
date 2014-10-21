// classList.toggle only works in ie10+ :(

      // var navOpen = document.getElementById('nav-controler');

      // navOpen.onclick = function() {
      //   document.getElementById('slidebar').classList.toggle('slidebar-open');
      // }


      // Alternative method for changing states which works in IE7+ / IE8+ for CSS
      var nav = document.querySelector('.btn-nav-tab');

      var toggleState = function( elm, one, two ) {
        var elm = document.querySelector(elm);
        elm.setAttribute('data-state', elm.getAttribute('data-state') === one ? two : one);
      };

      // slide nav bar in and out
      nav.onclick = function ( e ) {
        toggleState('.slidebar-container', 'closed', 'open');
        e.preventDefault();
      }


      // To allow for compatibility with IE < 10,
      // we'll use these custom add/remove class functions
      // instead of classList.add()/.remove()

      function addClass( elm, newClass ) {
        elm.className += ' ' + newClass;
      }


      function removeClass( elm, deleteClass ) {
        elm.className = elm.className.replace(new RegExp("\\b" + deleteClass + "\\b", 'g'), '').trim();
        // the RegExp here makes sure that only the class we want to delete, and not any other
        // potentially matching stings get deleted.
        // e.g. -- if deleteClass = options and we also had a class of options--1 and options
        // on the elm, just the class of options would get deleted
      }

      var navLinks = document.querySelectorAll('.nav-link'),
          navLinksLength = navLinks.length,
          i;

      for ( i = 0; i < navLinksLength; i++ ) {
        navLinks[i].addEventListener('click', function () {
          for ( i = 0; i < navLinksLength; i++ ) {
            removeClass( navLinks[i].parentNode, 'nav-active' );
          }
          addClass( this.parentNode, 'nav-active' )
        });

      }
