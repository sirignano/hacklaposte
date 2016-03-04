// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Data
//Angular App Module and Controller
arrcities = [[],[]];

latitude = 0;
longitude = 0;
latitude2 = 0;
longitude2 = 0;

angular.module('mapsApp', [])
.controller('MapCtrl', function ($scope, $http) {
    var apiAddr = "http://api-adresse.data.gouv.fr/search/?q=";
	$scope.markers = [[],[]];
	$scope.map = [];
    function randString(x)
    {
        var s = "";
        while(s.length<x&&x>0)
        {
             var r = Math.random();
             s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
        }
        return s;
    }
    $scope.getCities = function(id, n)
    {
        if ($scope.departAddr && n == 0)
        {

            $http.get(apiAddr + $scope.departAddr).then(function(response)
            {

                longitude = response.data.features[0].geometry.coordinates[0];
                latitude = response.data.features[0].geometry.coordinates[1];
                //https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont2&geofilter.distance=48.8520930694,2.34738897685,500
                $http.get("https://datanova.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont2&geofilter.distance=" + longitude + "," + latitude + ",1000").then(function(rsp)
                {
                    // rsp.data.records
                    for (record in rsp.data.records) {
                        arrcities[n].push({city: record.fields.libelle_du_site, desc: record.fields.adresse + " "  + record.fields.code_postal + ", "  + record.fields.localite, lat: record.fields.latitude, long: record.fields.longitude});
                    }
                }, function() {});
                                                                                            // var i = 0;
                                                                                            // var j = Math.floor((Math.random() * 8) + 3);
                                                                                            // arrcities[n] = [];
                                                                                            // while (i < j)
                                                                                            // {
                                                                                            //     var x = Math.floor((Math.random() * 9) + 1) / 100;
                                                                                            //     var y = Math.floor((Math.random() * 9) + 1) / 100;
                                                                                            //     arrcities[n].push({city: randString(Math.floor((Math.random() * 10) + 5)), desc: "", lat: latitude + x, long: longitude + y});
                                                                                            //     i += 1;
                                                                                            // }
		gmap(id, n);
            }, function() {});
        }

        if ($scope.finalAddr && n == 1)
        {

            $http.get(apiAddr + $scope.finalAddr).then(function(response)
            {

                longitude2 = response.data.features[0].geometry.coordinates[0];
                latitude2 = response.data.features[0].geometry.coordinates[1];
                                                                                            var i = 0;
                                                                                            var j = Math.floor((Math.random() * 8) + 3);
                                                                                            arrcities[n] = [];
                                                                                            while (i < j)
                                                                                            {
                                                                                                var x = Math.floor((Math.random() * 9) + 1) / 100;
                                                                                                var y = Math.floor((Math.random() * 9) + 1) / 100;
                                                                                                arrcities[n].push({city: randString(Math.floor((Math.random() * 10) + 5)), desc: "", lat: latitude2 + x, long: longitude2 + y});
                                                                                                i += 1;
                                                                                            }
                gmap(id, n);
            }, function() {});
        }
    }
	function gmap(id, n)
	{
		var array = [];
		    var mapOptions = {
		        zoom: 8,
		        center: new google.maps.LatLng(latitude, longitude),
		    }
			array.push(mapOptions);
		    var mapOptions1 = {
		        zoom: 8,
		        center: new google.maps.LatLng(latitude2, longitude2),
		    }
			array.push(mapOptions1);

    $scope.map[n] = new google.maps.Map(document.getElementById(id), array[n]);

    $scope.markers[n] = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){

        var marker = new google.maps.Marker({
            map: $scope.map[n],
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map[n], marker);
        });

        $scope.markers[n].push(marker);

    }

    for (i = 0; i < arrcities[n].length; i++){
        createMarker(arrcities[n][i]);
    }
	}
    $scope.openInfoWindow = function(e, selectedMarker){
        google.maps.event.trigger(selectedMarker, 'click');
    }

});
