'use strict'

var TrackingModel = require('../models/tracking-model');

var TweetsCollection = Backbone.Collection.extend({
		model: TrackingModel,
		url: function(){
			return 'http://198.211.105.132:8080/suivi/' + this.id;
		}
	});

module.exports = TweetsCollection;