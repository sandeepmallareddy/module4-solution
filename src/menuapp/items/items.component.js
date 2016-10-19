(function(){
    'use strict';

    angular.module('MenuApp')
	.component('item',{
	    templateUrl : 'src/menuapp/items/items.template.html',
	    bindings    : {
		'items' : '<',
	    },
	});
})();
