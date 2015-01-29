/*!
 * bs-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.2
 */
!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(){"use strict";/*!
	 * bs-autoscale-input
	 * author: Bret Little
	 * copyright: 2015
	 * license: MIT
	 * version: 1.0.0
	 */
var t=angular.module("bs-autoscale-input",[]);t.directive("bsAutoscaleInput",[function(){var t=function(t,e,n){return'<div style="position: absolute;"><span style="font-family:'+n+";font-size:"+e+'; font-weight:400;">'+t+"</span></div>"};return{require:"ngModel",restrict:"A",link:function(e,n,r,a){var o=function(e){e=e.length<3?"hello":e,e=e.replace(/\s/g,"_"),r.maxLength&&(e=e.substring(0,r.maxLength));var a=$(t(e,n.css("font-size"),n.css("font-family")));n.after(a),n.width(a.width()||"50px"),a.remove()};n.keyup(function(){var t=n.val();o(t&&t.length?t:n.attr("placeholder")||"hello dawg")}),o(n.val()||n.attr("placeholder")||"hello dawg"),e.$watch(function(){return a.$modelValue},function(){o(n.val()||n.attr("placeholder")||"hello dawg")})}}}])}]);