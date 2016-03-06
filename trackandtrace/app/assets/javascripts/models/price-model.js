'use strict'

var PriceModel = Backbone.Model.extend({
		urlRoot: 'https://api.laposte.fr/tarifenvoi/v1',
		defaults: function() {
			return  {
				
			}
		}
	});

module.exports = PriceModel;