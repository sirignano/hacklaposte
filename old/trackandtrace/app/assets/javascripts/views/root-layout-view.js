'use strict'

//TEMPLATE
var tpl = require('../templates/root-layout.hbs');

var RootLayout = Marionette.LayoutView.extend({
		el: '#root-container',
		template: tpl,
		regions: {
			app: '#app'
		}
	});

module.exports = RootLayout;