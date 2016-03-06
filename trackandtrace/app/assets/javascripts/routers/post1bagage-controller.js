'use strict'

var RootLayout = require('../views/root-layout-view');
var HomeView = require('../views/home-view');
var OrderView = require('../views/order-view');
var TrackingCompositeView = require('../views/tracking-composite-view');
var CheckView = require('../views/check-view');
var ResultView = require('../views/result-view');
var PriceView = require('../views/price-view');

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
		this.orderView = new OrderView();
		this.listenTo(this.orderView, 'getResult', this.showResult);

		this.rootLayout.showChildView('app', this.orderView);
	},

	showTracking: function() {
		this.rootLayout.showChildView('app', new TrackingCompositeView());
	},

	showCheck: function() {
		this.rootLayout.showChildView('app', new CheckView());
	},

	showResult: function() {
		this.rootLayout.showChildView('app', new ResultView());	
	},

	showPrice: function() {
		console.log('showPrice');
		this.rootLayout.showChildView('app', new PriceView());	
	}
});

module.exports = Post1BaggageController;