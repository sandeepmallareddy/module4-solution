(function(){
    angular.module('MenuApp')
	.component('category',{
	    templateUrl: 'src/menuapp/categories/category.template.html',
	    binding   : {
		categories : '<',
	    }
	});

})();
