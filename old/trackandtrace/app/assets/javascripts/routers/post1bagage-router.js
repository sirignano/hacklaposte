'use strict'

var Post1BaggageController = require('./post1bagage-controller');

var Post1BaggageRouter = Marionette.AppRouter.extend({
	appRoutes: {
		'home': 'showHome',
		'order': 'showOrder',
		'tracking': 'showTracking'
	},

	initialize: function(options) {
		console.log('router');
		this.controller = new Post1BaggageController(this.options);
	}
});

module.exports = Post1BaggageRouter;