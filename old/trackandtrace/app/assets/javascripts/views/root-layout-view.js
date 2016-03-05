'use strict'

//TEMPLATE

var RootLayout = Marionette.LayoutView.extend({
		el: '#root-container',
		template: '../../../templates/root-layout.hbs',
		regions: {
			app: '#app'
		}
	});

module.exports = RootLayout;
