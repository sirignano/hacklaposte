'use strict'

//TEMPLATE
var tpl = require('../../templates/check.hbs');

var CheckView = Marionette.ItemView.extend({
		template: tpl
	});

module.exports = CheckView;