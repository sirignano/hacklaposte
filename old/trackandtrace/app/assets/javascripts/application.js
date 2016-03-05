// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require angular
//= require angular-animate
//= require angular-resource
//= require turbolinks
//= require underscore
//= require backbone
//= require trackandtrace
//= require backbone.marionette
//= require handlebars.runtime
//= require handlebars
//= require react
//= require react_ujs
//= require components
//= require underscore
//= require backbone
//= require trackandtrace
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers


'use strict'

var Post1BaggageRouter = require('./routers/post1bagage-router');

(function($) {

	$(function() {
		console.log('app start');
		var app = new Marionette.Application({
			onStart: function(options) {
				console.log('onStart');
				var router = new Post1BaggageRouter(options);

				console.log('history start');
				Backbone.history.start();
			}
		});

		app.start();
	});
})($);
