'use strict'

//TEMPLATE
var tpl = require('../../templates/order.hbs');

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl, 

		ui: {
			btnSubmit: "#btnSubmit"
		},

		events: {
			'click @ui.btnSubmit': 'getResult'
		},

		getResult: function(e) {
		   this.trigger('getResult', e);
		   initMap();
		}
	});

module.exports = OrderView;