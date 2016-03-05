'use strict'

var Tweet = Backbone.Model.extend({
		urlRoot: '/api/posts',
		defaults: function() {
			return  {
				username: '',
				body: ''
			}
		}
	});

module.exports = Tweet;