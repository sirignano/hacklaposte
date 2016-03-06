'use strict'

var Order = Backbone.Model.extend({
		urlRoot: function(){
			var baseUrl = 'http://198.211.105.132:8080/order';
			console.log('this', this.id)
			if (typeof (this.id) != 'undefined') {
				return baseUrl + '/' + this.id;
			};
			return baseUrl;
		}


		,
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
		},

		initialize: function(){
			console.log('arguments', this.id)
		}
	});

module.exports = Order;