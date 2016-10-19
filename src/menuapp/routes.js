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
		template: '<div>This is the categories page</div>'
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
		template: '<div>This is the Items page</div>'
	    });

    }
    

})();
