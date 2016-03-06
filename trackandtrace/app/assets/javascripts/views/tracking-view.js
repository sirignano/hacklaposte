'use strict'

//TEMPLATE
var tpl = require('../../templates/tracking.hbs');

var TrackingView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl,
		templateHelpers: function(){
	    return {
		  	step : (typeof (this.model.get('step') != 'undefined') && this.model.get('step')!=4) ? true : false,
		  }
		}
	});

module.exports = TrackingView;