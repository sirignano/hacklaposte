'use strict'

var Order = Backbone.Model.extend({
		urlRoot: 'http://198.211.105.132:8080/order',
		defaults: function() {
			return  {
				startPlace: "",
				endPlace: "",
				endDate: "",
				endTime: "",
				sSize: "",
				lSize: "",
				xlSize: ""
			}
		}
	});

module.exports = Order;