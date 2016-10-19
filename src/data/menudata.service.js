(function(){
    'use strict';


    /* Defining the Menu Data Service */
    angular.module('Data')
	.service('MenuDataService',MenuDataService)
	.constant('categoriesUrl','https://davids-restaurant.herokuapp.com/categories.json')
	.constant('itemsUrl',' https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    //Inject the HTTP service and categoriesurl and itemurl constants
    MenuDataService.$inject = ['$http','categoriesUrl','itemsUrl'];

    /** Define the MenuDataService **/
    function MenuDataService($http,categoriesUrl,itemsUrl){

	var service = this;

	/** Function to get all the categories in the menu **/
	service.getAllCategories = function(){
	    var response = $http({
		method : 'GET',
		url    : (categoriesUrl),
	    });
		
	    return response.then(function(response){
		return response.data;
	    }).catch(function(error){
		return new Error(error);
	    });

	};

	/** Function to get the items in one category **/
	service.getItemsForCategory = function(shortname){
	    var response = $http({
		method : 'GET',
		url    : (itemsUrl+shortname),
	    });
	    
	    return response.then(function(response){
		return response.data.menu_items;
	    }).catch(function(error){
		return new Error(error);
	    });

	};

    }




})();
