/**
 
 */
jqmModule.directive('jqmNavbar', function () {
    return {
        priority: 1,
        restrict: 'A',
        scope: {
            mini: '@',
            theme: '@'
        },
        compile: function(elm, attr) {
          
          function getCharacterOfNumber(positionInAlphabet){
            return String.fromCharCode(97+(positionInAlphabet%26));
          }
          
          findListElements(elm[0]);
          
          elm[0].className += ' ui-navbar ui-mini';
          
          var list = elm[0].children[0];
          
          if(list.nodeName !== "UL"){
              throw new Error("The jqmNavbar Element has to have an <ul>-Element as child!");
          }
          
          var mod = 1;
          var listelements = list.children;
          var numberOfElements = listelements.length;
          
          if( numberOfElements === 1){
            list.className += ' ui-grid-solo';
          }else if(numberOfElements < 6){
            mod = 5;
            list.className += ' ui-grid-'+getCharacterOfNumber(numberOfElements-2);
          } else {
            mod = 2;
            list.className += 'ui-grid-duo ui-grid-a';
          }
           
          for(var i = 0; i < listelements.length;i++){
              listelements[i].className += "ui-block-"+getCharacterOfNumber(i%mod);
          }
        }
    };
  
  function findListElements(element){
    if(element.nodeName === "LI"){
      //there has to be an childelement of every li which becomes jqm-navbar-entry and jqm-button.
      var childElement = angular.element(element.children[0]);
      
      childElement.attr("jqm-navbar-entry", "");
      childElement.attr("jqm-button", "");
    }else{
      for(var i = 0; i < element.children.length; i++){
        findListElements(element.children[i]);
      }
    }
  }
});