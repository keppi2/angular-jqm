  "use strict";
  ddescribe("jqmNavbar", function () {
      var ng, jqm, ngElement, jqmElement;
    
      beforeEach(function () {
          ng = testutils.ng;
          jqm = testutils.jqm;
      }); 
  
      function compile() {
          ngElement = ng.init('<div jqm-navbar><ul><li><a jqm-button jqm-button-inline href="a.html">Test</a></li></ul></div>');
          jqmElement = jqm.init('<div data-role="navbar"><ul><li><a href="a.html">Test</a></li></ul></div>');
      }
     
     function compileNElements(n) {
       
          var ngElementString = "";
          var jqmElementString = "";
         for( var i = 0; i < n;i++){
          ngElementString = ngElementString + "<li><a jqm-button jqm-button-inline>Test"+i+"</a></li>";
          jqmElementString = jqmElementString + "<li><a>Test"+i+"</a></li>";
         }
       
          ngElement = ng.init('<div jqm-navbar><ul>'+ngElementString+'</ul></div>');
          jqmElement = jqm.init('<div data-role="navbar"><ul>'+jqmElementString+'</ul></div>');
      }

      
      describe('test layout', function () {
        
          iit("has same markup in default configuration", function () {
            compile();
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
        
          iit("has same markup with two list elements", function () {
            compileNElements(2);
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
         
      });
   
  }); 