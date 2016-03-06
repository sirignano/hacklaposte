'use strict'

//TEMPLATE
var tpl = require('../../templates/price.hbs');
// MODEL
var OrderModel = require('../models/order-model.js');
var PriceModel = require('../models/price-model.js');

var HomeView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl,

		events: {
			'click [type="checkbox"]' : 'changePrice'
		},

		initialize: function(){
			var self = this;
			this.idLuggage = '6A08223127191';
			this.model = new OrderModel();
			this.model.id = this.idLuggage
			this.model.fetch({
				success: function(){
					console.log('self.model', self.model)
				}
			});

	  	this.priceModel = new PriceModel();
	  	// price S
	  	this.priceModel.fetch({
	  		headers: {
	  			'X-OKAPI-KEY' : 'joRA6JzkF7I2FCFKKGvYdEK2kg+Pnd62xYey8maXx5eK68afC6/xF5xNQCI87+v/',
	  			'Content-Type': 'plain/text'
	  		},
	  		data:{
	  			'type' : 'colis',
	  			'poids': 10000
	  		},
	  		success: function(){
			  	self.priceS = self.priceModel.attributes[0].price;
	  		}
	  	});
		},

		changePrice: function(e){
			if (e.target.checked === true) {
				$('.value-price').html(parseInt($('.value-price').html()) + 10);
			}else{
				$('.value-price').html(parseInt($('.value-price').html()) - 10);
			}
		}

	});

module.exports = HomeView;