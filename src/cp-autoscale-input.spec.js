describe("Beanstalk autoscale input", function() {
	var elm, scope, input;

	beforeEach(module('cp-autoscale-input'));

	beforeEach(inject(function($rootScope, $compile, $filter) {
		elm = angular.element(
			'<div>' +
			'<input type="text" cp-autoscale-input ng-model="value" placeholder="something for you to eat"/>' +
			'</div>'
		);

		$('body').append(elm);

		scope = $rootScope.$new();
		scope.value = "Mumtaz billie";
		$compile(elm)(scope);
		scope.$digest();

		input = elm.find('input');
	}));

	afterEach(function() {
		elm.remove();
	});

	it("should scale the input correctly when first rendered", function() {
		expect(input.width()).toBe(103);
	});

	it("should scale the input as characters are typed", function() {
		input.val("Hello there!").keyup();
		expect(input.width()).toBe(91);
	});

	it("should have a minimum scale of 28px", function() {
		input.val("H").keyup();
		expect(input.width()).toBe(39);
	});

	it("Should use the placeholder if there is no current value", function() {
		input.val("").keyup();
		expect(input.width()).toBe(193);
	});

	it("Should autoscale when the model changes", function() {
		scope.value = "Bism allah irahaman irahim allhamdullah";
		scope.$digest();
		expect(input.width()).toBe(314);
	});

	it("should prevent cross site scripting", function() {
		input.val("<script>window.attacked=true;</script>").keyup();
		expect(window.attacked).toBeUndefined();
	});
});
