'use strict'

//TEMPLATE
var tpl = require('../templates/home.hbs');

var HomeView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl
	});

module.exports = HomeView;