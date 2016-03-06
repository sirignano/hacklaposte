'use strict'

//TEMPLATE
var tpl = require('../../templates/result.hbs');

var ResultView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: tpl
	});

module.exports = ResultView;