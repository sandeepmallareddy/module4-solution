(function(){
    'use strict';

    angular.module('MenuApp')
	.controller('CategoryStateController',CategoryStateController);

    //Inject categories which is retrieved from state resolution
    CategoryStateController.$inject = ['categories'];

    function CategoryStateController(categories){

	var categorydetails = this;
	categorydetails.categories = categories;

    }
    
})();
