'use strict'

//TEMPLATE

var RootLayout = Marionette.LayoutView.extend({
		el: '#root-container',
		template: require('../../templates/root-layout.hbs'),
		regions: {
			app: '#app'
		}
	});

module.exports = RootLayout;
