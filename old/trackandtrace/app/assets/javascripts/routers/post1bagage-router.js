'use strict'

var Post1BaggageController = require('./post1bagage-controller');

var Post1BaggageRouter = Marionette.AppRouter.extend({
	appRoutes: {
		'': 'showHome',
		'home': 'showHome',
		'order': 'showOrder',
		'tracking': 'showTracking',
		'deliver': 'showCheck',
		'result': 'showResult'
	},

	initialize: function(options) {
		this.controller = new Post1BaggageController(this.options);
	}
});

module.exports = Post1BaggageRouter;