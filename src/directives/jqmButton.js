
jqmModule.directive('jqmButton', [function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'templates/jqmButton.html',
        scope: {
            mini: '@'
        },
        require: ['?jqmControlGroupCtrl'],
        link: function (scope, element, attr, ctrl){
               var jqmControlGroupCtrl = ctrl[0];
            
    
          
            scope.isMini = isMini;
          scope.isDisabled = isDisabled
 
          
            var hasExplicitTheme = scope.hasOwnProperty('$theme');
            if (!hasExplicitTheme) {
                scope.$theme = 'c';
            }

            element.addClass("ui-btn ui-shadow ui-btn-corner-all ui-btn-up-"+scope.$theme+" "+((isMini())?"ui-mini":""));
            element.bind('mouseenter mouseleave', toggleMouseOver);

            function isMini() {
              return scope.mini || (jqmControlGroupCtrl && jqmControlGroupCtrl.$scope.mini);
            }
          
          function isDisabled(){
            return attr.disabled === "disabled" || element.hasClass("ui-disabled");
          }

            function toggleMouseOver(){
              element.toggleClass("ui-btn-up-"+scope.$theme);
              element.toggleClass("ui-btn-hover-"+scope.$theme);
            }
          
          if(attr.jqmButton.toLowerCase() === "button"){
            content = element.text();
            element.append('<button class="ui-btn-hidden" data-disabled="'+((scope.isDisabled())?"true":"false")+'">'+content+'</button>');
          }
          
          if(scope.isDisabled()){
            console.log("disabled");
            element.addClass("ui-disabled");
          }else{
            
            console.log("enabled");
        }
        }
    }
}]);
