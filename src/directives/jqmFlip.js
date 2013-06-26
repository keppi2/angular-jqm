jqmModule.directive('jqmFlip', ['jqmTheme', function (jqmTheme) {
    return {
        templateUrl : "templates/jqmFlip.html",
        transclude: true,
        restrict: 'A',
        link: function (scope, iElement) {
            var theme = jqmTheme(iElement);
            scope.option1 = {};
            scope.option2 = {};
            scope.current = {};

            var select = angular.element(iElement.children()[0].children[0].children[0]);
            select.addClass('ui-slider-switch');

            var option1 = angular.element(select[0].children[1]);
            var option2 = angular.element(select[0].children[0]);

            scope.option1.text = option1[0].text;
            scope.option1.value = option1[0].value;
            scope.option2.text = option2[0].text;
            scope.option2.value = option2[0].value;

            if(option1[0].selected === true){
                scope.option1.selected = true;
                scope.option2.selected = false;
                scope.current = scope.option1;
            }else{
                scope.option1.selected = false;
                scope.option2.selected = true;
                scope.current = scope.option2;

            }

        }
    };

}]);
