var batp = angular.module("cp-autoscale-input", []);

batp.directive("cpAutoscaleInput", [

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
					var measuredEl = document.createElement('div');
					measuredEl.style.position = "absolute";
					var span = document.createElement('span');
					span.style['font-family'] = el.css('font-family').replace(/\"/g, "'");
					span.style['font-size'] = el.css('font-size');
					span.style['font-weight'] = '400';
					span.innerText = text;
					measuredEl.appendChild(span);
					el.after(measuredEl);
					el.css(width, measuredEl.offsetWidth + 4 + "px");
					measuredEl.parentNode.removeChild(measuredEl);
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
