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
    const merged = context.configuration.returnReasons;
    // context.get.reasonList().concat(context.configuration.returnReasons);
    console.error("merged reasons ", merged);
    context.exec.setReasonList(merged);
  }
  callback();
};

