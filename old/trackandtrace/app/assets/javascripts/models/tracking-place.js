'use strict'

var TrackingPlace = Backbone.Model.extend({
		urlRoot: 'http://api.laposte.fr/suivi/v1',
		defaults: function() {
			return  {
				
			}
		}
	});

module.exports = TrackingPlace;