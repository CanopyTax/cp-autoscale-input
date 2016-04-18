/*!
 * cp-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.9
 */
!function(t){function e(r){if(n[r])return n[r].exports;var l=n[r]={exports:{},id:r,loaded:!1};return t[r].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";var n=angular.module("cp-autoscale-input",[]);n.directive("cpAutoscaleInput",[function(){var t=function(t,e){return'<div style="position: absolute;"><span style="font-family:'+e+";font-size:"+t+'; font-weight:400;"></span></div>'};return{require:"ngModel",restrict:"A",link:function(e,n,r,l){var o=function(e){e=e.length<3?"hello":e,e=e.replace(/\s/g,"_");var r=$(t(n.css("font-size"),n.css("font-family").replace(/\"/g,"'")));r.find("span").text(e),$("html").append(r),n.css("width",r[0].offsetWidth+4+"px"),r.remove()};n.keyup(function(t){var e=n.val();o(e&&e.length?e:n.attr("placeholder")||"hello dawg")}),o(n.val()||n.attr("placeholder")||"hello dawg"),e.$watch(function(){return l.$modelValue},function(t){o(n.val()||n.attr("placeholder")||"hello dawg")})}}}])}]);