(function(){
    angular.module('MenuApp')
	.component('category',{
	    templateUrl: 'src/menuapp/category/category.template.html',
	    bindings   : {
		categories : '<',
	    }
	});

})();
