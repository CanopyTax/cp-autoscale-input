/*!
 * bs-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.1
 */
!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(){"use strict";/*!
	 * bs-autoscale-input
	 * author: Bret Little
	 * copyright: 2015
	 * license: MIT
	 * version: 1.0.0
	 */
var t=angular.module("bs-autoscale-input",[]);t.directive("bsAutoscaleInput",[function(){var t=function(t,e,n){return"<div style='position: absolute;'><span style='font-family:"+n+";font-size:"+e+" ;'>"+t+"</span></div>"};return{require:"ngModel",restrict:"A",link:function(e,n,r,o){var l=function(e){e=e.length<10?"hello":e;var r=$(t(e,n.css("font-size"),n.css("font-family")));n.after(r),n.width(r.width()||"50px"),r.remove()};n.keyup(function(){var t=n.val();l(t&&t.length?t:n.attr("placeholder")||"hello dawg")}),l(n.val()||n.attr("placeholder")||"hello dawg"),e.$watch(function(){return o.$modelValue},function(){l(n.val()||n.attr("placeholder")||"hello dawg")})}}}])}]);