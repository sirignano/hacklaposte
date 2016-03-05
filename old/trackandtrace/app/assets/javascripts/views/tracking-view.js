'use strict'

//TEMPLATE
var tpl = require('../../../templates/tracking.hbs');

var TrackingView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl
	});

module.exports = TrackingView;
