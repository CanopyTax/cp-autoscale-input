bs-autoscale-input  [![Build Status](https://travis-ci.org/Beanstalkhq/bs-autoscale-input.png?branch=master)](https://travis-ci.org/Beanstalkhq/bs-autoscale-input)
============

An angular directive for auto sizing and input based upon the content within it

## Installation
bs-time-pick requires jquery and Angular 1.3.*

Install bs-time-pick with bower or npm
```
  bower install --save bs-autoscale-input
  npm install --save bs-autoscale-input
```
Or manually download the [built file](https://raw.githubusercontent.com/Beanstalkhq/bs-autoscale-input/master/build/bs-autoscale-input.js)

## Usage
Make your angular app depend upon the `bs-autoscale-input` module
```javascript
angular.module("app", ["bs-autoscale-input"]);
```

## Example
```html
  <input type="text" ng-model="myDate" bs-autoscale-input/>
```
