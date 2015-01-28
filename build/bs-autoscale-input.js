/*!
 * bs-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.0
 */
!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(){"use strict";var t=angular.module("bs-autoscale-input",[]);t.directive("bsAutoscaleInput",[function(){var t=function(t,e,n){return"<div style='position: absolute;'><span style='font-family:"+n+";font-size:"+e+" ;'>"+t+"</span></div>"};return{require:"ngModel",restrict:"A",link:function(e,n,r,o){var a=function(e){e=e.length<10?"hello":e;var r=$(t(e,n.css("font-size"),n.css("font-family")));n.after(r),n.width(r.width()),r.remove()};n.keyup(function(){var t=n.val();a(t&&t.length?t:n.attr("placeholder"))}),a(n.val()||n.attr("placeholder")||"hello dawg"),e.$watch(function(){return o.$modelValue},function(){a(n.val()||n.attr("placeholder")||"hello dawg")})}}}])}]);