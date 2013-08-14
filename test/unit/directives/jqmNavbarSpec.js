"use strict";
describe("jqmNavbar", function () {
    var ng, jqm, ngElement, jqmElement;
  
    beforeEach(function () {
        ng = testutils.ng;
        jqm = testutils.jqm;
    });

    describe('test layout', function () {
      
        function compileIt() {
            ngElement = ng.init('<div jqm-navbar><ul><li><a href="a.html">Test</a></li></ul></div>');
            jqmElement = jqm.init('<div data-role="navbar"><ul><li><a href="a.html">Test</a></li></ul></div>');
        }
       
       function compileNElements(n) {
            var ngElementString = "";
            var jqmElementString = "";
         
            for ( var i = 0; i < n;i++){
              ngElementString = ngElementString + "<li><a >Test"+i+"</a></li>";
              jqmElementString = jqmElementString + "<li><a>Test"+i+"</a></li>";
            }
         
            ngElement = ng.init('<div jqm-navbar><ul>'+ngElementString+'</ul></div>');
            jqmElement = jqm.init('<div data-role="navbar"><ul>'+jqmElementString+'</ul></div>');
        }
      
        //if i dont create the test in own function, JSLint will cancel the succesfull build
        function compareNElements(n){
            it("has same markup with "+n+" list elements", function () {
              compileNElements(n);
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
        }
    
        it("has same markup in default configuration", function () {
          compileIt();
          testutils.compareElementRecursive(ngElement, jqmElement);
        });
        
        for(var i = 2; i < 7;i++){
           compareNElements(i);
        }
    
        it("has same markup with 10 list elements", function () {
            compileNElements(10);
            testutils.compareElementRecursive(ngElement, jqmElement);
        });
    });
});
