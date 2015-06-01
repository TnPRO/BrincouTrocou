/*
 * Copyright (C) 2012-2013 by Guillaume Charhon
 * Modifications 10/16/2013 by Brian Thurlow
 */

var log = function (msg) {

    console.log("InAppBilling[js]: " + msg);
};


var InAppBilling = function () {

    this.options = {};
};


InAppBilling.init = function (success, fail, options, skus) {


	options || (options = {});


	this.options = {

		showLog: options.showLog || true

	};

	
	if (this.options.showLog) {

		//alert('setup ok');

	}
	
	var hasSKUs = false;

	//Optional Load SKUs to Inventory.

	if(typeof skus !== "undefined"){

		if (typeof skus === "string") {

        	skus = [skus];

    	}
    	if (skus.length > 0) {

        	if (typeof skus[0] !== 'string') {

            	var msg = 'invalid productIds: ' + JSON.stringify(skus);

            	alert(msg);

				fail(msg);

            	return;

        	}

        	alert('load ' + JSON.stringify(skus));

			hasSKUs = true;

    	}

	}

	
	if(hasSKUs){

		return cordova.exec(success, fail, "InAppBillingPlugin", "init", [skus]);

    }else {

        //No SKUs

		return cordova.exec(success, fail, "InAppBillingPlugin", "init", []);

    }
};

InAppBilling.getPurchases = function (success, fail) {

	if (this.options.showLog) {

		//alert('getPurchases called!');

	}

	return cordova.exec(success, fail, "InAppBillingPlugin", "getPurchases", ["null"]);

};

InAppBilling.buy = function (success, fail, productId) {

	if (this.options.showLog) {

		//alert('buy called!');

	}

	return cordova.exec(success, fail, "InAppBillingPlugin", "buy", [productId]);
};

InAppBilling.subscribe = function (success, fail, productId) {

	if (this.options.showLog) {

		alert('subscribe called!');

	}

	return cordova.exec(success, fail, "InAppBillingPlugin", "subscribe", [productId]);
};

InAppBilling.consumePurchase = function (success, fail, productId) {
	if (this.options.showLog) {

		alert('consumePurchase called!');
	}

	return cordova.exec(success, fail, "InAppBillingPlugin", "consumePurchase", [productId]);
};

InAppBilling.getAvailableProducts = function (success, fail) {

	if (this.options.showLog) {

		alert('getAvailableProducts called!');

	}

	return cordova.exec(success, fail, "InAppBillingPlugin", "getAvailableProducts", ["null"]);
};

InAppBilling.getProductDetails = function (success, fail, skus) {

	if (this.options.showLog) {

		alert('getProductDetails called!');

	}

	
	if (typeof skus === "string") {

        skus = [skus];
    }

    if (!skus.length) {

        // Empty array, nothing to do.

        return;
    
}else {
  
      if (typeof skus[0] !== 'string') {
 
           var msg = 'invalid productIds: ' + JSON.stringify(skus);
            alert(msg);
			fail(msg);
            return;
        }
 
       alert('load ' + JSON.stringify(skus));


		return cordova.exec(success, fail, "InAppBillingPlugin", "getProductDetails", [skus]);

    }
};


module.exports = new InAppBilling();