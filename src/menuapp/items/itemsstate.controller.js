(function(){
    'use strict';
    angular.module('MenuApp')
	.controller('ItemsStateController',ItemsStateController);

    ItemsStateController.$inject = ['items'];

    function ItemsStateController(items){
	var itemsdetails = this;

	itemsdetails.items = items;
    }




})();
