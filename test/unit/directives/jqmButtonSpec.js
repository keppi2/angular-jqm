  "use strict";
  ddescribe("jqmButton", function () {
      var ng, jqm, ngElement, jqmElement;
      beforeEach(function () {
          ng = testutils.ng;
          jqm = testutils.jqm;
      });
  
      function compile(ngAttrs, jqmAttrs) {
          ngElement = ng.init('<a href="index.html"  jqm-button '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init('<a href="index.html" data-role="button" '+jqmAttrs+' >myButtons</a>');
      }
    
      function compileButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init('<div  jqm-button="button" '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init('<button '+jqmAttrs+' >myButtons</a>');
      }

      describe('anker tag ', function () {
            
          it("has same markup", function () {
            compile('','');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
          
          it("has same markup while mouseenter", function () {
            compile('','');
                      
            jqmElement.trigger('mouseenter');
            ngElement.triggerHandler('mouseenter');
                      
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
        
          it("has same markup after mouseenter and mouseleave", function () {
            compile('','');
                      
            jqmElement.trigger('mouseenter');
            jqmElement.trigger('mouseleave'); 
            
            ngElement.triggerHandler('mouseenter');
            ngElement.triggerHandler('mouseleave');
                      
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
        
          it("has same markup when disabled", function () {
            compile('class="ui-disabled"','class="ui-disabled"');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
         
          it("has same markup when mini", function () {
            compile('data-mini="true"','data-mini="true"');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
        });
        
        describe('button tag ', function () {
          
          it("has same markup when on button", function () {
            compileButton('','');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });     
                    
          it("has same markup while mouseenter", function () {
            compileButton('','');
                      
            jqmElement.trigger('mouseenter');
            ngElement.triggerHandler('mouseenter');
                      
            testutils.compareElementRecursive(ngElement, jqmElement);
          });     
          
        it("has same markup after mouseenter and mouseleave", function () {
            compileButton('','');
                      
            jqmElement.trigger('mouseenter');
            jqmElement.trigger('mouseleave'); 
            
            ngElement.triggerHandler('mouseenter');
            ngElement.triggerHandler('mouseleave');
                      
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
          
          //todo mark button as disabled="disabled"!!
         it("has same markup when disabled", function () {
            compileButton('disabled="disabled"','');
            jqmElement.find("button").button("disable");

            testutils.compareElementRecursive(ngElement, jqmElement);
          });
         
          it("has same markup when mini", function () {
            compileButton('data-mini="true"','data-mini="true"');
            
            testutils.compareElementRecursive(ngElement, jqmElement);
          });
        });
        
   
          
   
  });