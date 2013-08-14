/**
 
 */
jqmModule.directive('jqmNavbarEntry', ['$compile',function ($compile) {
    return {
        priority: 1,
        restrict: 'A',
        require: ['^jqmNavbar'],
        compile: function(elm, attr) {
          elm[0].className += ' ui-btn-up-c';
          attr.shadow = "false";
          attr.corners = "false";
          attr.inline = "true";
        }
    };
}]);