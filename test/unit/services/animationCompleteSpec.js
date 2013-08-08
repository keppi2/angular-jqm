
"use strict";
describe('animationComplete', function() {
    var $sniffer;
    it('throws an exception if the browser does not support css animations', inject(function($animationComplete, $sniffer) {
        $sniffer.animations = false;
        expect(function() {
            $animationComplete();
        }).toThrow();
    }));
    it('binds to animationend if no vendorPrefix exists', inject(function($animationComplete, $sniffer) {
        var el = angular.element('<div></div>'),
            spy = jasmine.createSpy();
        $sniffer.animations = true;
        $sniffer.vendorPrefix = '';
        spyOn(el, 'bind');
        $animationComplete(el, spy);
        expect(el.bind).toHaveBeenCalledWith('animationend', spy);
    }));
    it('binds to prefixed animationend if vendorPrefix exists', inject(function($animationComplete, $sniffer) {
        var el = angular.element('<div></div>'),
            spy = jasmine.createSpy();
        $sniffer.animations = true;
        $sniffer.vendorPrefix = 'Webkit';
        spyOn(el, 'bind');
        $animationComplete(el, spy);
        expect(el.bind).toHaveBeenCalledWith('animationend', spy);
        expect(el.bind).toHaveBeenCalledWith('webkitAnimationEnd', spy);
    }));
    it('should support once binding', inject(function($animationComplete, $sniffer) {
        var el = angular.element('<div></div>');
        var spy = jasmine.createSpy('callback');

        $sniffer.animations = true;
        $sniffer.vendorPrefix = '';

        spyOn(el, 'unbind').andCallThrough();
        spyOn(el, 'bind').andCallThrough();

        $animationComplete(el, spy, true);
        expect(el.bind.mostRecentCall.args[0]).toBe('animationend');
        el.triggerHandler('animationend');
        expect(el.unbind.mostRecentCall.args[0]).toBe('animationend');
        expect(spy).toHaveBeenCalled();

        spy.reset();
        el.triggerHandler('animationend');
        expect(spy).not.toHaveBeenCalled();
    }));
    it('returns a function to unbind', inject(function($animationComplete, $sniffer) {
        var el = angular.element('<div></div>');
        var spy = jasmine.createSpy('callback');

        $sniffer.animations = true;
        $sniffer.vendorPrefix = 'Webkit';

        spyOn(el, 'unbind').andCallThrough();
        spyOn(el, 'bind').andCallThrough();

        var removeCb = $animationComplete(el, spy);
        expect(el.unbind).not.toHaveBeenCalled();
        removeCb();
        expect(el.unbind).toHaveBeenCalledWith('animationend', spy);
        expect(el.unbind).toHaveBeenCalledWith('webkitAnimationEnd', spy);
    }));
});