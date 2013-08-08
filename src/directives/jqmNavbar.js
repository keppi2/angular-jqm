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

          
          if(listelements.length === 1){
            list.addClass("ui-grid-solo");
          }else if(listelements.length === 2){
            list.addClass("ui-grid-a"); 
          }
          
            
          
          for(var i = 0; i < listelements.length;i++){
             angular.element(listelements[i]).addClass("ui-block-"+((i===0)?"a":"b"));
          }  
      
        }
    }; 
               
    function JqmNavbarCtrl() {
        return {
          inNavbar : true
        } 
    }
});
