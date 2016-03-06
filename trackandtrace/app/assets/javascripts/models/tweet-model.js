'use strict'

var Order = Backbone.Model.extend({
		urlRoot: '/api/order',
		defaults: function() {
			return  {
				
			}
		}
	});

module.exports = Order;