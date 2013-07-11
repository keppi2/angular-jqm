"use strict";
describe('jqmFlip', function() {
    it('compares two elements created by angular.element', function() {
        var ng = testutils.ng,
            jqm = testutils.jqm;

        var value = angular.element('<div></div>');
        var expected = angular.element('<div></div>');
        testutils.compareElementRecursive(value, expected);
    });

    it('generates same markup as jq data-role="slider" without select and option', function() {
       var value = testutils.ng.init('<div jqm-flip on-label="someLabelOn" on-value="someValueOn" off-label="someLabelOff" off-value="someValueOff">'+
            '</div>');


        var expected = angular.element('<div>'+
            '<div role="application" class="ui-slider ui-slider-switch ui-btn-down-c ui-btn-corner-all">' +
            '<span class="ui-slider-label ui-slider-label-a ui-btn-active ui-btn-corner-all" role="img" style="width: 0%;">someLabelOn</span>' +
            '<span class="ui-slider-label ui-slider-label-b ui-btn-down-c ui-btn-corner-all" role="img" style="width: 100%;">someLabelOff</span>' +
            '' +
            '<div class="ui-slider-inneroffset">' +
            '   <a href="#" class="ui-slider-handle ui-slider-handle-snapping ui-btn ui-btn-up-c ui-shadow ui-btn-corner-all" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c" role="slider" aria-valuemin="0" aria-valuemax="1" aria-valuenow="off" aria-valuetext="Off" title="Off" aria-labelledby="flip-1-label" style="left: 0%;">' +
            '       <span class="ui-btn-inner">' +
            '           <span class="ui-btn-text">' +
            '           </span>' +
            '       </span>' +
            '   </a>' +
            '</div>' +
            '</div>'+
            '</div>');

        testutils.compareElementRecursive(value, expected);
    });


    it('it selects Off Value by Default', function() {
        var ng = testutils.ng;
        var ngElement = ng.init('<div jqm-flip ng-model="myVar" on-label="someLabelOn" on-value="someValueOn" off-label="someLabelOff" off-value="someValueOff">'+
            '</div>');
        ng.scope.myVar = "someValueOff";
        ng.scope.$apply();

        console.dir (ngElement.children());

    });
});