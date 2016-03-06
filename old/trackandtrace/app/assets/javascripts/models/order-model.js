'use strict'

var Order = Backbone.Model.extend({
		urlRoot: '/api/posts',
		defaults: function() {
			return  {
				username: '',
				body: ''
			}
		}
	});

module.exports = Order;