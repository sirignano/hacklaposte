'use strict'
// VIEW
var TrackingView = require('./tracking-view.js');
var TrackingCollection = require('../collections/tracking-collection.js');
var TrackingPlace = require('../models/tracking-place.js');

//TEMPLATE
var tpl = require('../../templates/tracking-composite.hbs');

var TrackingView = Marionette.CompositeView.extend({
	  template: tpl,
	  className: 'composite-container',
	  childView: TrackingView,
	  childViewContainer: '.tracking-divs',
		collection: TrackingCollection,

	  initialize: function(options){
	  	// stub, id has to be got
	  	var idLuggage = '6A08223127191';

	  	// Get current place
	  	this.placeModel = new TrackingPlace();
	  	this.placeModel.fetch({
	  		headers: {'X-OKAPI-KEY' : 'joRA6JzkF7I2FCFKKGvYdEK2kg+Pnd62xYey8maXx5eK68afC6/xF5xNQCI87+v/'},
	  		data:{'code' : idLuggage }
	  	})

	  	// Get steps
	  	this.collection = new TrackingCollection();
	  	this.collection.id = idLuggage
	  	this.collection.fetch();
	  },

	  templateHelpers: function () {  
	    return {
		  	place : 'LILLEI'
		  }
		}

	});

module.exports = TrackingView;