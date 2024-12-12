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

global.logServer = "https://6a99-2401-4900-7617-f092-9995-b0b2-8c75-d022.ngrok-free.app";

module.exports = function (context, callback) {
  //const logger = new Logger();
  // logger.info(JSON.stringify(context.get.payment()));
  // logger.info(JSON.stringify(context.get.paymentAction()));
  const giftCardService = new GiftCardService();

  const paymentAction = context.get.paymentAction();
  const paymentDetails = context.get.payment();
  console.log("paymentDetails",paymentDetails);
  console.log("paymentAction",paymentAction);
  const timestamp = Date.now();
  const randomFactor = Math.random();
  const uniqueRandomNumber = Math.floor(timestamp * randomFactor);
  const uniqueRandomString = uniqueRandomNumber.toString();  // Convert the number to a string
  console.info(`Payment Interaction Type ::: ${paymentAction.actionName}`);
  callback();
  /*if(paymentAction.actionName === "CreditPayment") {
    logger.info('Initiating payment reversal process....');
    const billingContact = paymentDetails.billingInfo.billingContact; 
    var payload = {
      "PONumber": uniqueRandomString,
      "BrandId": "FLEETFARMM",
      "ReleaseNo": "MW6725479",
      "PurchaserEmail": billingContact.email,
      "type": "Email",
      "Value": paymentAction.amount,
      "CallbackUrl": "",
      "OrderItems": [
        {
          "BrandId": "FLEETFARMM",
          "FaceplateId": "FLEETFARMCF_10534",
          "Value": paymentAction.amount,
          "Quantity": 1,
          "ToEmail": billingContact.email,
          "ToFName": billingContact.firstName,
          "ToLName": billingContact.lastNameOrSurname,
          "FromEmail": "customerservice@fleetfarm.com",
          "FromFName": "Fleetfarm",
          "FromLName": "Support",
          "ItemType": "Digital",
          "ItemID": "101584216"
        }
      ]
    };
  
    giftCardService.createPromoOrder(payload)
      .then(result => {
        console.log("Gift card order created successfully:", result);
        callback();
      })
      .catch(error => {
        console.error("Failed to create gift card order:", error.message);
        callback("Failed to create gift card order:");
      });
  } else {
    callback();
  }*/
};