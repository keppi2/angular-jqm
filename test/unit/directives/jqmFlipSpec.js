"use strict";
describe('jqmFlip', function() {
    it('generates same markup as jq data-role="slider"', function() {
        var ng = testutils.ng,
            jqm = testutils.jqm;

        ng.init('<div jqm-flip>' +
                '<select name="flip-1" id="flip-1">'+
                '<option value="off">Off</option>'+
                '<option value="on">On</option>'+
                '</select>' +
            '</div>');
        jqm.init('<div>' +
                '<select name="flip-1" id="flip-1" data-role="slider">'+
                '<option value="off">Off</option>'+
                '<option value="on">On</option>'+
                '</select>' +
            '</div>');
        testutils.compareElementRecursive(ng.viewPort, jqm.viewPort);
    });
});