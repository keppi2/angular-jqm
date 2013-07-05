jqmModule.directive('jqmFlip', ['jqmTheme', function (jqmTheme) {
    return {
        templateUrl : "templates/jqmFlip.html",
        transclude: true,
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, iElement, attr, ngModelCtrl) {
            var theme = jqmTheme(iElement);

            //console.dir(attr);

            scope.optionOn = {};
            scope.optionOff = {};
            scope.current = {};

            if((typeof attr.onLabel) !== "undefined") {
                scope.optionOn.label = attr.onLabel;
            }else{
                scope.optionOn.label = "On";
            }

            if((typeof attr.onValue) !== "undefined") {
                scope.optionOn.value = attr.onValue;
            }
            else{
                scope.optionOn.value = true;
            }

            if((typeof attr.offLabel) !== "undefined") {
                scope.optionOff.label = attr.offLabel;
            }else{
                scope.optionOff.label = "Off";
            }

            if((typeof attr.offValue) !== "undefined") {
                scope.optionOff.value = attr.offValue;
            }
            else{
                scope.optionOff.value = false;
            }

            scope.current = scope.optionOn;



            if (ngModelCtrl) {
                enableNgModelCollaboration();
            }


            function enableNgModelCollaboration() {
                var onValue = scope.optionOn.value,
                    offValue = scope.optionOff.value;


                ngModelCtrl.$render = function () {

                    if(ngModelCtrl.$viewValue === scope.optionOn.value )  {
                        scope.current = scope.optionOn;
                    }else{
                        scope.current = scope.optionOff;
                    }
                };


            }

        }
    };

}]);
