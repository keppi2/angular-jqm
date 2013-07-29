/**
 * @ngdoc directive
 * @name jqm.directive:jqmButton
 * @restrict A
 *
 * @description 
 * Creates a jquery mobile button on the given element.
 * 
 * The jqm-button can be used on <a></a> and <button /> Tags
 * @param {string=} jqmButton Value "button" defines if this directive is set on a <button /> tag
 * @param {string=} disabled Whether this button is disabled.
 * @param {string=} mini Whether this checkbox is mini.
 * @param {string=} iconpos The position of the icon for this element. "left" or "right".
 *
 * @example
<example module="jqm">
  <file name="index.html">
    <div jqm-checkbox ng-model="checky">
      My value is: {{checky}}
    </div>
    <div jqm-checkbox mini="true" iconpos="right" ng-model="isDisabled">
      I've got some options. Toggle me to disable the guy below.
    </div>
    <div jqm-checkbox disabled="{{isDisabled ? 'disabled' : ''}}" 
      ng-model="disably" ng-true-value="YES" ng-false-value="NO">
      I can be disabled! My value is: {{disably}}
    </div>
  </file>
</example>
 */
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
          scope.isDisabled = isDisabled;
          scope.isIcon = isIcon;
          
          function isMini() {
            return scope.mini || (jqmControlGroupCtrl && jqmControlGroupCtrl.$scope.mini);
          }
        
          function isDisabled(){
            return attr.disabled === "disabled" || element.hasClass("ui-disabled");
          }

          function isIcon(){
            return attr.jqmButtonIcon; 
          }

          function toggleMouseOver(){
            element.toggleClass("ui-btn-up-"+scope.$theme);
            element.toggleClass("ui-btn-hover-"+scope.$theme);
          }
          
          
 
          
          var hasExplicitTheme = scope.hasOwnProperty('$theme');
          if (!hasExplicitTheme) {
              scope.$theme = 'c';
          }

          element.addClass("ui-btn ui-shadow ui-btn-corner-all ui-btn-up-"+scope.$theme+" "+((isMini())?"ui-mini ":" ") +((isIcon())?"ui-btn-icon-left ":" ") );
          element.bind('mouseenter mouseleave', toggleMouseOver);

       
          if(attr.jqmButton.toLowerCase() === "button"){
            content = element.text();
            element.append('<button class="ui-btn-hidden" data-disabled="'+((scope.isDisabled())?"true":"false")+'">'+content+'</button>');
          }
          
          if(scope.isDisabled())
            element.addClass("ui-disabled");
          
          if(scope.isIcon()){
            element.children(0).append('<span class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span>');
          }
        }
    }
}]);
