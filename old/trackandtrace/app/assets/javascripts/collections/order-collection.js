'use strict'

var Tweet = require('../models/tweet-model');

var TweetsCollection = Backbone.Collection.extend({
		model: Tweet,
		url: '/api/posts'
	});

module.exports = TweetsCollection;