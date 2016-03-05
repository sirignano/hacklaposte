'use strict'

//TEMPLATE
var tpl = require('/public/templates/order.hbs');

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl
	});

module.exports = OrderView;