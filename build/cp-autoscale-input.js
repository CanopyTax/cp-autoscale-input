/*!
 * cp-autoscale-input
 * author: Bret Little
 * copyright: 2015
 * license: MIT
 * version: 1.0.5
 */
!function(e){function t(l){if(n[l])return n[l].exports;var r=n[l]={exports:{},id:l,loaded:!1};return e[l].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";var n=angular.module("cp-autoscale-input",[]);n.directive("cpAutoscaleInput",[function(){return{require:"ngModel",restrict:"A",link:function(e,t,n,l){var r=function(e){e=e.length<3?"hello":e,e=e.replace(/\s/g,"_"),n.maxLength&&(e=e.substring(0,n.maxLength));var l=document.createElement("div");l.style.position="absolute";var r=document.createElement("span");r.style["font-family"]=t.css("font-family").replace(/\"/g,"'"),r.style["font-size"]=t.css("font-size"),r.style["font-weight"]="400",r.innerText=e,l.appendChild(r),t.after(l),t.css(width,l.offsetWidth+4+"px"),l.parentNode.removeChild(l)};t.keyup(function(e){var n=t.val();r(n&&n.length?n:t.attr("placeholder")||"hello dawg")}),r(t.val()||t.attr("placeholder")||"hello dawg"),e.$watch(function(){return l.$modelValue},function(e){r(t.val()||t.attr("placeholder")||"hello dawg")})}}}])}]);