var batp = angular.module("bs-autoscale-input", []);

batp.directive("bsAutoscaleInput", [

	function() {
		var html = function(text, size, family) {
			return '<div style="position: absolute;"><span style="font-family:' + family + ';font-size:' + size + '; font-weight:400;">' + text + '</span></div>';
		};
		return {
			require: 'ngModel',
			restrict: "A",
			link: function(scope, el, attr, ngModel) {

				function measureAndSize(text) {
					text = text.length < 3 ? "hello" : text;
					text = text.replace(/\s/g, "_");
					if(attr.maxLength) text = text.substring(0,attr.maxLength);
					var measuredEl = $(html(text, el.css('font-size'), el.css('font-family').replace(/\"/g, "'")));
					el.after(measuredEl);
					el.width(measuredEl.width() || "50px");
					measuredEl.remove();
				}

				el.keyup(function(e) {
					var val = el.val();

					if (val && val.length) {
						measureAndSize(val);
					} else {
						measureAndSize(el.attr('placeholder') || "hello dawg");
					}
				});

				measureAndSize(el.val() || el.attr('placeholder') || "hello dawg");

				scope.$watch(function() {
					return ngModel.$modelValue;
				}, function(newValue) {
					measureAndSize(el.val() || el.attr('placeholder') || "hello dawg");
				});
			}
		};
	}
]);
