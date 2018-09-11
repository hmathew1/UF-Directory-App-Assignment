angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.entry = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */

    $scope.addListing = function() {
      //elements of item
      var listToAdd = {
        "code": $scope.code,
        "name": $scope.name,
        "coordinates": {
          "latitude": $scope.latitude,
          "longitude": $scope.longitude
        },
        "address": $scope.address,
      }
      //add to listing
      $scope.listings.push(listToAdd);
    };

    $scope.deleteListing = function(index) {
      // deletes from listing array
      $scope.listings.splice(index,1);

    };

    $scope.showDetails = function(code) {
      var i, index;
      for(i=0; i<$scope.listings.length; i++){
        $scope.entry = $scope.listings[i];
        if($scope.entry.code===code){
          index=i;
        }
      }

      $scope.detailedInfo = $scope.listings[index];

    };

    $scope.searchFilterCustom = function(entry) {
		return function(entry)
		{
			if(typeof $scope.filterText == 'undefined')
			{
				return entry;
			}

			if(entry.name.includes($scope.filterText) || entry.code.includes($scope.filterText))
			{
				return entry;
			}
		}
	};
  }
]);
