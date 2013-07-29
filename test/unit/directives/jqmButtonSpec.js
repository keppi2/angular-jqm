  "use strict";
  ddescribe("jqmButton", function () {
      var ng, jqm, ngElement, jqmElement;
      var ngPre ="",ngPost ="", jqmPre = "", jqmPost = "";
    
      beforeEach(function () {
          ng = testutils.ng;
          jqm = testutils.jqm;
      });
  
      function compileAnker(ngAttrs, jqmAttrs) {
          ngElement = ng.init(ngPre + '<a href="index.html"  jqm-button '+ngAttrs+'>myButtons</div>' + ngPost);
          jqmElement = jqm.init(jqmPre + '<a href="index.html" data-role="button" '+jqmAttrs+' >myButtons</a>' +jqmPost);
      }
    
      function compileButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init(ngPre + '<div jqm-button="button" '+ngAttrs+'>myButtons</div>' + ngPost);
          jqmElement = jqm.init(jqmPre + '<button '+jqmAttrs+' >myButtons</a>' +jqmPost);
      }     
    
    function compileSubmitButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init(ngPre + '<div jqm-button="submit" '+ngAttrs+'>myButtons</div>' + ngPost);
          jqmElement = jqm.init(jqmPre + '<button type="submit" '+jqmAttrs+' >myButtons</a>' +jqmPost);;
      }
    function compileResetButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init(ngPre + '<div jqm-button="submit" '+ngAttrs+'>myButtons</div>' + ngPost);
          jqmElement = jqm.init(jqmPre + '<button type="submit" '+jqmAttrs+' >myButtons</a>' +jqmPost);
      }

    
      describe('anker tag ', function () {
        
          testLayout(compileAnker);
        
          it("has same markup when disabled", function () {
            compileAnker('jqm-button-disabled ','class="ui-disabled"');
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
      });
    
    
      describe('button', function () {
          
          testLayout(compileButton);
        
          it("has same markup when disabled", function () {
            compileButton('jqm-button-disabled ','');
            jqmElement.find("button").button("disable");
            testutils.compareElementRecursive(ngElement, jqmElement);
          });     
        
          it("is able to be a submit button", function () {
            compileSubmitButton('','');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });  
        
           it("is able to be a reset button", function () {
            compileResetButton('','');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });   
        
      });
    
    
    function testLayout(compileFunction){
          describe('layout', function () {  
            it("has same markup", function () {
              compileFunction('','');
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("respects different themes", function () {
              compileFunction('jqm-theme="a"','data-theme="a"');
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            xit("respects different themes in parent", function () {
              ngPre  = '<div jqm-theme="b">';
              jqmPre = '<div data-theme="b">';
              ngPost = jqmPost = '</div>';
              
              compileFunction('','');

              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("has same markup while mouseenter", function () {
              compileFunction('','');
                        
              jqmElement.trigger('mouseenter');
              ngElement.triggerHandler('mouseenter');
                        
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
          
            it("has same markup after mouseenter and mouseleave", function () {
              compileFunction('','');
                        
              jqmElement.trigger('mouseenter');
              jqmElement.trigger('mouseout'); 
              
              ngElement.triggerHandler('mouseenter');
              ngElement.triggerHandler('mouseout');
                        
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("has same markup while mousedown", function () {
              compileFunction('','');
                        
              jqmElement.trigger('mousedown');
              ngElement.triggerHandler('mousedown');
              
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
              
            it("has same markup after mousedown mouseout", function () {
              compileFunction('','');
                        
              jqmElement.trigger('mouseenter');
              jqmElement.trigger('mousedown');
              jqmElement.trigger('mouseout');
              
              ngElement.triggerHandler('mouseenter');
              ngElement.triggerHandler('mousedown');
              ngElement.triggerHandler('mouseout');
              
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
                        
            it("has same markup after mousedown mouseout mouseup", function () {
              compileFunction('','');
                        
              jqmElement.trigger('mouseenter');
              jqmElement.trigger('mousedown');
              jqmElement.trigger('mouseup');
              jqmElement.trigger('mouseout'); 
              
              ngElement.triggerHandler('mouseenter');
              ngElement.triggerHandler('mousedown');
              ngElement.triggerHandler('mouseup');
              ngElement.triggerHandler('mouseout');
              
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("has same markup when mini", function () {
              compileFunction('data-mini="true"','data-mini="true"');
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            describe('icons', function () {
              it("first icon", function () {
                compileFunction('jqm-button-icon="delete"','data-icon="delete"');
                testutils.compareElementRecursive(ngElement, jqmElement);
              }); 
              
              it("different icon", function () {
                compileFunction('jqm-button-icon="add"','data-icon="add"');
                testutils.compareElementRecursive(ngElement, jqmElement);
              });
              
              it("iconpos right", function () {
                compileFunction('jqm-button-icon="add" jqm-button-iconpos="right"','data-icon="add" data-iconpos="right" ');
                testutils.compareElementRecursive(ngElement, jqmElement);
              });
              
              it("notext", function () {
                compileFunction('jqm-button-icon="add" jqm-button-iconpos="notext"','data-icon="add" data-iconpos="notext" ');
                testutils.compareElementRecursive(ngElement, jqmElement);
              });
            });    
          });
    }
           
       /* 
          describe('functionality', function(){
              xit("click on disabled button is not possible", function () {
                compile('','class="ui-disabled"');//'class="ui-disabled"',);
      
                jqmElement.trigger('click');
                ngElement.triggerHandler('click');
                  
                testutils.compareElementRecursive(ngElement, jqmElement);
              });
          });
        */

          
   
  });