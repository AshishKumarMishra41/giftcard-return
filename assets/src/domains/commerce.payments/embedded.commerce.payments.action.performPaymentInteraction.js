/**
 * Implementation for embedded.commerce.payments.action.performPaymentInteraction

 * This custom function will receive the following context object:
{
  "exec": {
    "addPaymentInteraction": {
      "parameters": [
        {
          "name": "paymentInteraction",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.paymentInteraction"
      }
    },
    "setPaymentAmountRequested": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "setPaymentAmountCollected": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "setPaymentAmountCredited": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    }
  },
  "get": {
    "payment": {
      "parameters": [],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "paymentAction": {
      "parameters": [],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.paymentAction"
      }
    }
  }
}


 */
const GiftCardService = require('../../GiftCardService');
const Logger = require("../../core/Logger");

global.logServer =  "https://681e-45-114-49-89.ngrok-free.app";
//global.proxyServer = 'https://nfvn44d833.execute-api.us-east-2.amazonaws.com/moneris/qa';

module.exports = function(context, callback) {
  const logger = new Logger();
  logger.info(context.get.payment);
  const giftCardService = new GiftCardService();
  
  const timestamp = Date.now();
  const randomFactor = Math.random();
  const uniqueRandomNumber = Math.floor(timestamp * randomFactor);
  const uniqueRandomString = uniqueRandomNumber.toString();  // Convert the number to a string
  console.log(uniqueRandomString);

  var obj = {
    "PONumber": uniqueRandomString,
    "BrandId": "FLEETFARMM",
    "ReleaseNo": "MW6725479",
    "PurchaserEmail": "rajesh.k@skillnetinc.com",
    "type": "Email",
    "Value": 39.99,
    "CallbackUrl": "",
    "OrderItems": [
      {
        "BrandId": "FLEETFARMM",
        "FaceplateId": "FLEETFARMCF_10534",
        "Value": 39.99,
        "Quantity": 1,
        "ToEmail": "rajesh.k@skillnetinc.com",
        "ToFName": "Jacqui",
        "ToLName": "Schlotterbeck",
        "FromEmail": "customerservice@fleetfarm.com",
        "FromFName": "Fleetfarm",
        "FromLName": "Support",
        "ItemType": "Digital",
        "ItemID": "101584216"
      }
    ]
  };

  /*giftCardService.createPromoOrder(obj)
      .then(result => {
          console.log("Gift card order created successfully:", result);
      })
      .catch(error => {
          console.error("Failed to create gift card order:", error.message);
      });   */
  callback();
};