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
 * @param {string=} jqmButtonDisabled 
 * @param {string=} jqmButtonIcon
 * @param {string=} jqmButtonIconPos
 * @param {string=} mini
 *
 * @example
<example module="jqm">
  <file name="index.html">
    <a href="https://google.com/" jqm-button jqm-button-icon="search">Do some search</a>
    <a href="https://bing.com/" jqm-button jqm-button-icon="search" data-mini="true" >Mini search</a>
    <a href="https://google.com/" jqm-button jqm-button-icon="search" jqm-button-disabled >This is not working</a>
    <form action="http://foobar3000.com/echo" method="GET">
      <input type="text" name="textinput" value="" />
      <div jqm-button="submit" jqm-button-icon="check">Submit it!</div>
      <div jqm-button="reset" jqm-button-icon="minus" data-iconpos="right" >Throw it away</div>
    </form>
  </file>
</example>
 */
jqmModule.directive('jqmButton', [function () {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'templates/jqmButton.html',
        scope: {
            mini: '@',
            theme: '@'
        },
        require: ['^?jqmControlgroup'],
        link: function (scope, element, attr, ctrl){
               var jqmControlGroupCtrl = ctrl[0];
          
          
          scope.isMini = isMini;
          scope.isDisabled = isDisabled;
          scope.isIcon = isIcon;
          scope.isButton = isButton;
          scope.isSubmitButton = isSubmitButton;
          scope.isResetButton = isResetButton;
          scope.isInline = isInline;
          scope.theme = scope.$theme || 'c';
          
          function isMini() {
            return scope.mini || (jqmControlGroupCtrl && jqmControlGroupCtrl.$scope.mini);
          }
        
          function isDisabled(){
            return attr.jqmButtonDisabled === "" || element.hasClass("ui-disabled");
          }

          function isIcon(){
            return attr.jqmButtonIcon; 
          }
          
          function getIconPos(){
           if(attr.jqmButtonIconpos)
             return attr.jqmButtonIconpos;
            else
             return "left";
          }
 
          function isInline(){
            return attr.jqmButtonInline === ""; 
          }
 
          function toggleMouseOver(){
            element.toggleClass("ui-btn-up-"+scope.$theme);
            element.toggleClass("ui-btn-hover-"+scope.$theme);
          }
          
          function toggleMouseClick(){
            element.toggleClass("ui-btn-down-"+scope.$theme);
            element.toggleClass("ui-btn-up-"+scope.$theme);
          }
          
          function toggleMouseLeave(){
            //there will be no mouseup event if mouse left before
            if(element.hasClass("ui-btn-down-"+scope.$theme)){
              toggleMouseClick();        
            }
            
            toggleMouseOver();
          }
          
          function isButton(){
            return attr.jqmButton.toLowerCase() === "button" || isSubmitButton() || isResetButton();
          } 
          function isSubmitButton(){
            return attr.jqmButton.toLowerCase() === "submit";
          }      
          function isResetButton(){
            return attr.jqmButton.toLowerCase() === "reset" ;
          }

        

          element.addClass("ui-btn ui-shadow ui-btn-corner-all ui-btn-up-"+scope.$theme+" "+
                           ((isMini())?"ui-mini ":" ") +
                           ((isIcon())?"ui-btn-icon-"+getIconPos()+" ":" ") + 
                           ((isInline())?"ui-btn-inline ":" ") + 
                           ((isSubmitButton())?"ui-submit":"") );/*+
                           ((scope.$position.first)  ? "ui-first-child":"") + 
                           ((scope.$position.last)   ? "ui-last-child":"")); //*/
 
          
          element.bind('mouseenter', toggleMouseOver);
          element.bind('mouseleave', toggleMouseLeave);
          element.bind('mousedown mouseup', toggleMouseClick);

         
          if(scope.isIcon()){
              element.children(0).append('<span class="ui-icon ui-icon-'+attr.jqmButtonIcon+' ui-icon-shadow">&nbsp;</span>');
          }
          
          if(scope.isButton()){
            var type = "";
            
            if(isSubmitButton())
              type = 'type="submit" ';
            else if(isResetButton())
              type = 'type="reset" ';
              
            var content = element.text();
            element.append('<button '+type+'class="ui-btn-hidden" data-disabled="'+((scope.isDisabled())?"true":"false")+'">'+content+'</button>');
          }
          
          if(scope.isDisabled())
            element.addClass("ui-disabled");
          
  

          
        }
    }
}]);
