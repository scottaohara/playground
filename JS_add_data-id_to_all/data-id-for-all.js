;(function ( w, doc, undefined ) {
	'use strict';

	/**
	 * Function to loop through all elements on
	 * a page and supply each element with a [data-id]
	 * attribute, with a unique value.
	 */

	var setDataID = function () {
		var self;
		var all = doc.querySelectorAll('*');

		/**
		 * Loop through all elements.
		 * If an element already had a manually set data-id,
		 * then just move on.
		 * If no data-id exists, generate a random one.
		 */
		for ( var i = 0; i < all.length; i++ ) {
			self = all[i];

			if ( self.hasAttribute('data-id') ) {
				console.log('move on');
			}
			else {
				self.setAttribute('data-id', 'id_' + Math.floor(Math.random() * 999) + 1);
			}
		}
	}

	/* Go go JavaScript */
	setDataID();

})( window, document );
