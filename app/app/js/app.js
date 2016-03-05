angular.module('Portail', ["myServiceRest", "ngRoute", "angular-md5", "ngFileUpload", "checklist-model"])
.controller("PortailCtrl", function($scope, myservice, $window, $location, md5, Upload) {
	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		if (tabPath.length == 2 && tabPath[1]) {
			$scope.vueCourante = "wrongPath";
		} else {
			$scope.vueCourante = "home";
		}
	});
});
