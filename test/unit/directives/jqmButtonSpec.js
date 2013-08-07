  "use strict";
  ddescribe("jqmButton", function () {
      var ng, jqm, ngElement, jqmElement;
    
      beforeEach(function () {
          ng = testutils.ng;
          jqm = testutils.jqm;
      });
  
      function compileAnker(ngAttrs, jqmAttrs) {
          ngElement = ng.init('<a href="index.html"  jqm-button '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init('<a href="index.html" data-role="button" '+jqmAttrs+' >myButtons</a>');
      }
    
      function compileButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init( '<div jqm-button="button" '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init('<button '+jqmAttrs+' >myButtons</a>');
      }     
    
      function compileSubmitButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init('<div jqm-button="submit" '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init('<button type="submit" '+jqmAttrs+' >myButtons</a>');;
      }
      
      function compileResetButton(ngAttrs, jqmAttrs) {
          ngElement = ng.init('<div jqm-button="reset" '+ngAttrs+'>myButtons</div>');
          jqmElement = jqm.init( '<button type="reset" '+jqmAttrs+' >myButtons</a>');
      }
    
      function compileControlgroupButtons(ngAttrs, jqmAttrs) {
          ngElement = ng.init( '<fieldset jqm-controlgrouplegend="myLegend"><div jqm-button="button" '+ngAttrs+'>myButton 1</div><div jqm-button="button" '+ngAttrs+'>myButton 2</div><div jqm-button="button" '+ngAttrs+'>myButton 3</div></fieldset>');
          jqmElement = jqm.init('<fieldset data-role="controlgroup"><legend>myLegend</legend><button '+jqmAttrs+' >myButtons 1</a><button '+jqmAttrs+' >myButtons 2</a><button '+jqmAttrs+' >myButtons 3</a></fieldset>');
      }
 
    
      describe('anker ', function () {
          testLayout(compileAnker);
        
          it("has same markup when disabled", function () {
            compileAnker('jqm-button-disabled ','class="ui-disabled"');
            testutils.compareElementRecursive(ngElement, jqmElement);
          }); 
      });
    
      describe('button', function () {
          
          testLayout(compileButton);    
          describe(' submit ', function () {
            testLayout(compileSubmitButton);   
          });
        
          it("has same markup when disabled", function () {
            compileButton('jqm-button-disabled ','');
            jqmElement.find("button").button("disable");
            testutils.compareElementRecursive(ngElement, jqmElement);
          });     

           xit("is able to be a reset button", function () {
            compileResetButton('','');
            testutils.compareElementRecursive(ngElement, jqmElement);
          });   
        
      });
    
    //not finished yet
      xdescribe('controlgroup', function () {
        it("can handles controlgroups", function () {
          compileControlgroupButtons("","");
          testutils.compareElementRecursive(ngElement, jqmElement);
        }); 
        
        //todo: control orientation, control iconpos?
      });    

    
    function testLayout(compileFunction){
          describe('layout', function () {  
            it("has same markup", function () {
              compileFunction('','');
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("different themes theme:a", function () {
              compileFunction('jqm-theme="a"','data-theme="a"');
              testutils.compareElementRecursive(ngElement, jqmElement);
            });
            
            it("different themes theme:c", function () {
              compileFunction('jqm-theme="c"','data-theme="c"');
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
            
            it("inline buttons", function () {
              compileFunction('jqm-button-inline','data-inline="true"');
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
                 
              it("and mini", function () {
                compileFunction('data-mini="true" jqm-button-icon="delete"','data-mini="true" data-icon="delete"');
                testutils.compareElementRecursive(ngElement, jqmElement);
              });
              
            });    
          });
    }
   
  });