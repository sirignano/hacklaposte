'use strict'

//TEMPLATE

var HomeView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: require('../../templates/home.hbs')
	});

module.exports = HomeView;
