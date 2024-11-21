(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.index = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  
  'embedded.commerce.return.retrieveReasons': {
      actionName: 'embedded.commerce.return.retrieveReasons',
      customFunction: require('./domains/commerce.return/embedded.commerce.return.retrieveReasons')
  }
};

},{"./domains/commerce.return/embedded.commerce.return.retrieveReasons":2}],2:[function(require,module,exports){
/**
 * Implementation for embedded.commerce.return.retrieveReasons

 * This custom function will receive the following context object:
{
  "exec": {
    "setReasonList": {
      "parameters": [
        {
          "name": "reasonList",
          "type": "array"
        }
      ]
    }
  },
  "get": {
    "ReasonList": {
      "parameters": [],
      "return": {
        "type": "array"
      }
    }
  }
}
 */
const MissingReasonsFromATG = [
  "Changed Mind",
  "Gift Not Wanted",
  "Wrong Item Ordered",
  "Wrong Size Ordered",
  "Not As Pictured",
  "Quality Not As Expected",
  "Wrong Item Shipped",
  "Expired"
];

module.exports = function (context, callback) {
  if (context.configuration.returnReasons) {
    console.error("new reasons ", context.configuration.returnReasons);
    const merged = context.get.reasonList().concat(context.configuration.returnReasons);
    console.error("merged reasons ", merged);
    context.exec.setReasonList(merged);
  }
  callback();
};


},{}]},{},[1])(1)
});
