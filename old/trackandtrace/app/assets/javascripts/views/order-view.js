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
			'click @ui.sendfrom': 'sendFrom'
			'click @ui.sendtoo': 'getResult'

		},

		sendFrom: function(e) {
			initMap();
		}

		getResult: function(e) {
		   this.trigger('getResult', e);
		}
	});

module.exports = OrderView;