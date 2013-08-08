/**
 
 */
jqmModule.directive('jqmNavbar', function () {
    return {
        restrict: 'A',
        scope: {
            mini: '@',
            theme: '@'
        },
        controller: [JqmNavbarCtrl],
        link: function (scope, element, attr, ctrl){
           element.addClass("ui-navbar ui-mini");
          
          var list = element.children(0);
          var listelements = list.children();
          var numberElements = listelements.length;
          
          if( numberElements === 1){
            list.addClass("ui-grid-solo");
          }else if(numberElements < 6){
            list.addClass("ui-grid-"+ctrl.getCharacterOfNumber(numberElements-2)); 
          } else {
            //i have not idea what to do
          } 
           
            
          for(var i = 0; i < listelements.length;i++){
             angular.element(listelements[i]).addClass("ui-block-"+ctrl.getCharacterOfNumber(i));
          }  
      
        }
    };   
                
    function JqmNavbarCtrl() {
        
        //a === 0 
        function getCharacterOfNumber(positionInAlphabet){
          return String.fromCharCode(97+(positionInAlphabet%26)); 
        }
      
        return {
          inNavbar : true,
          getCharacterOfNumber : getCharacterOfNumber
        } 
    }
  
});
