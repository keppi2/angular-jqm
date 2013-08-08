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
    
     describe('supporting functions', function () {
          function getCharacterOfNumber(positionInAlphabet){
            return String.fromCharCode(97+(positionInAlphabet%26)); 
          }
      
        
          it("can transform number to character", function () {
            expect(getCharacterOfNumber('0')).toBe("a");
            expect(getCharacterOfNumber('1')).toBe("b");
            expect(getCharacterOfNumber('2')).toBe("c");
          }); 
     });
      
      describe('test layout', function () {
        
          it("has same markup in default configuration", function () {
            compile();
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
        
        for(var i = 2; i < 5;i++){
          it("has same markup with "+i+" list elements", function () {
            compileNElements(i);
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
        }
        it("has same markup with 5 list elements", function () {
            compileNElements(5);
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
        
           xit("has same markup with 6 list elements", function () {
            compileNElements(6);
            testutils.compareElementRecursive(ngElement, jqmElement);
          });    
      }); 
   
  }); 