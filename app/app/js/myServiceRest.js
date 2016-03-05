angular.module("myServiceRest", [ "ngResource" ])
.factory("myservice", function($resource) {	

	 var URL_API = "http://178.62.101.17:8080/api/";
//	var URL_API = "http://localhost:8080/api/";

	var serviceRest = $resource(URL_API, null, 
	{ 
		"getAllCollas" : { method: "GET", isArray: true, url: URL_API + "collaborateurs/:token"},
		"getAllCommus" : { method: "GET", isArray: true, url: URL_API + "communautes/:token"},
		"getAllUsers" : { method: "GET", isArray: true, url: URL_API + "users/:token"},
		"getAllUserscommu" : { method: "GET", isArray: true, url: URL_API + "userscommu/:token"},
		"getOneColla" : { method: "GET", isArray: false, url: URL_API + "collaborateur/mine/:token"},
		"getOneCommu" : { method: "GET", isArray: false, url: URL_API + "communaute/mine/:token"},
		"getNameCommus" : { method: "GET", isArray: true, url: URL_API + "communautes/name/:token"},
		"login" : { method: "POST", url: URL_API + "login"},
		"loginCommu" : { method: "POST", url: URL_API + "logincommu"},
		"addColla" : { method: "POST", url: URL_API + "new" },
		"addCommu" : { method: "POST", url: URL_API + "commu" },
		"addUser" : { method: "POST", url: URL_API + "addusers" },
		"addUsercommu" : { method: "POST", url: URL_API + "adduserscommu" }
	});

	return {
		getAllCollas: function(tokenColla) {
			return serviceRest.getAllCollas({token: tokenColla});
		},
		getAllCommus: function(tokenColla) {
			return serviceRest.getAllCommus({token: tokenColla});
		},
		getAllUsers: function(tokenColla) {
			return serviceRest.getAllUsers({token: tokenColla});
		},
		getAllUserscommu: function(tokenColla) {
			return serviceRest.getAllUserscommu({token: tokenColla});
		},
		getOneColla: function(tokenColla) {
			return serviceRest.getOneColla({token: tokenColla});
		},
		getOneCommu: function(tokenCommu) {
			return serviceRest.getOneCommu({token: tokenCommu});
		},
		getNameCommus: function(tokenColla) {
			return serviceRest.getNameCommus({token: tokenColla});
		},
		login: function(user) {
			return serviceRest.login(user, function() {}, function(r) {});
		},
		loginCommu: function(user) {
			return serviceRest.loginCommu(user, function() {}, function(r) {});
		},
		addColla: function(colla) {
			return serviceRest.addColla(colla, function() {}, function(r) {});
		},
		addCommu: function(commu) {
			return serviceRest.addCommu(commu, function() {}, function(r) {});
		},
		addUser: function(colla) {
			return serviceRest.addUser(colla, function() {}, function(r) {});
		},
		addUsercommu: function(commu) {
			return serviceRest.addUsercommu(commu, function() {}, function(r) {});
		}
	};
})
