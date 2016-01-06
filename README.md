cp-autoscale-input  [![Build Status](https://travis-ci.org/CanopyTax/cp-autoscale-input.png?branch=master)](https://travis-ci.org/CanopyTax/cp-autoscale-input)
============

An angular directive for auto sizing and input based upon the content within it

## Installation
cp-time-pick requires jquery and Angular 1.3.*

Install cp-time-pick with bower or npm
```
  bower install --save cp-autoscale-input
  npm install --save cp-autoscale-input
```
Or manually download the [built file](https://raw.githubusercontent.com/CanopyTax/cp-autoscale-input/master/build/cp-autoscale-input.js)

## Usage
Make your angular app depend upon the `cp-autoscale-input` module
```javascript
angular.module("app", ["cp-autoscale-input"]);
```

## Example
```html
  <input type="text" ng-model="myDate" cp-autoscale-input/>
```
## Options

### Max-length
Limit the length the input auto-scales to
```html
  <input type="text" ng-model="myDate" cp-autoscale-input max-length="20"/>
```
