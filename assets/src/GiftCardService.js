const request = require('request');

const MFFGiftCardConstants = {
    POST: 'POST',
    APPLICATION_JSON: 'application/json'
};

const promoOrderUrl = "https://api-stage.egifter.com/Order/v4";
const userAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11";
const accessToken = "r9l5tt9ld1r0ndr0k179r8r0l195nd2ck6h11th1rr9cl2n1rr20nt2c2r282ctr"; 

class GiftCardService {
    createPromoOrder(payload) {
        return new Promise((resolve, reject) => {
            try {
                const promoOrder = payload;

                const requestOptions = {
                    json: true,
                    method: MFFGiftCardConstants.POST,
                    url: promoOrderUrl,
                    body: promoOrder,
                    headers: {
                        'User-Agent': userAgent,
                        'Accept': MFFGiftCardConstants.APPLICATION_JSON,
                        'Content-Type': MFFGiftCardConstants.APPLICATION_JSON,
                        'AccessToken': accessToken
                    }
                };

                console.log("Egifter request body:", promoOrder);

                request(requestOptions, (error, response, body) => {
                    if (error) {
                        console.error("Error occurred:", error.message);
                        reject(new Error("EgifterError: " + error.message));
                    } else {
                        console.log("Response Code:", response.statusCode);
                        if (response.statusCode != 200 && response.statusCode != 201) {
                            console.error("Failed: HTTP response code:", response.statusCode);
                            console.error("Failed: HTTP response message:", response.statusMessage);
                            reject(new Error("EgifterError: " + response.statusMessage));
                        } else {
                            resolve(body);
                        }
                    }
                });

            } catch (error) {
                console.error("Unexpected error:", error.message);
                reject(new Error("EgifterError: " + error.message));
            }
        });
    }
}

module.exports = GiftCardService;
