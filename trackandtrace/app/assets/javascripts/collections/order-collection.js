'use strict'

var Order = require('../models/order-model');

var OrdersCollection = Backbone.Collection.extend({
		model: Tweet,
		url: '/api/posts'
	});

module.exports = OrdersCollection;