"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactDom=require("react-dom"),_reactDom2=_interopRequireDefault(_reactDom),ReactPhoenix=function(){function ReactPhoenix(){_classCallCheck(this,ReactPhoenix)}return _createClass(ReactPhoenix,null,[{key:"init",value:function init(){var elements=document.querySelectorAll("[data-react-class]");elements.forEach(function(e){var targetId=document.getElementById(e.dataset.reactTargetId),targetDiv=targetId||e,reactProps=e.dataset.reactProps?e.dataset.reactProps:"{}",reactElement=_react2.default.createElement(eval(e.dataset.reactClass),JSON.parse(reactProps));_reactDom2.default.render(reactElement,targetDiv)})}}]),ReactPhoenix}();exports.default=ReactPhoenix,document.addEventListener("DOMContentLoaded",function(e){ReactPhoenix.init()});