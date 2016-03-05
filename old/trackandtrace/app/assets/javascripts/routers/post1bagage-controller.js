'use strict'

var RootLayout = require('../views/root-layout-view');
var HomeView = require('../views/home-view');
var OrderView = require('../views/order-view');
var TrackingView = require('../views/tracking-view');

var Post1BaggageController = Marionette.Object.extend({
	initialize: function(options) {
		console.log('controller');
		this.rootLayout = new RootLayout();
		this.rootLayout.render();
	},

	showHome: function() {
		console.log('showHome');
		this.rootLayout.showChildView('app', new HomeView());
	},

	showOrder: function() {
		console.log('showOrder');
		this.rootLayout.showChildView('app', new OrderView());
	},

	showTracking: function() {
		console.log('showTracking');
		this.rootLayout.showChildView('app', new TrackingView());
	}	
});

module.exports = Post1BaggageController;