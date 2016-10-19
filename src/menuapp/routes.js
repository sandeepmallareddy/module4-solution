(function(){
    'use strict';

    angular.module('MenuApp')
	.config(RoutesConfig);

    //inject the state and the urlroute providers
    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    
    function RoutesConfig($stateProvider,$urlRouterProvider){
    
    //Set default route
    $urlRouterProvider.otherwise('/');

    $stateProvider
	//Route for main page
	    .state('main',{
		url: '/',
		templateUrl: 'src/menuapp/mainpage.template.html'
	    })
	
	//Route for Categories page
	    .state('categories',{
		url: '/categories',
		templateUrl: 'src/menuapp/category/categorystate.template.html',
		controller: 'CategoryStateController as categorydetails',
		resolve : {
		    'categories': ['MenuDataService',function(MenuDataService){
			return MenuDataService.getAllCategories();
			
		    }]
		}
	    })

	//Route for Categories page
	    .state('items',{
		url: '/items/{category}',
		templateUrl: 'src/menuapp/items/itemsstate.template.html',
		controller : 'ItemsStateController as itemsdetail',
		resolve : {
		    'items' : ['$stateParams','MenuDataService',
			       function($stateParams,MenuDataService){
				   return MenuDataService.getItemsForCategory($stateParams.category);
			       }] 
		}
	    });

    }
    

})();
