class Checkout {
	get vtbGuestCheckoutForm() { return $('#guest-login-form'); }
	get vtbLoginForm() { return $('#login-form'); }
	get vtbGuestEmail() { return $('#guest-login-email'); }
	get vtbGuestContinueBtn() { return $('#onepage-guest-register-button'); }	
	get vtbEmail() { return $('#login-email'); }
	get vtbPw() { return $('#login-password'); }
	get vtbLoginButton() { return $('#checkout-step-login > div > div.col-2 > div > div > button'); }
	get billingAddressForm() { return $('#co-billing-form'); }
	get billingFName() { return $('//*[@id="billing:firstname"]'); }
	get billingLName() { return $('//*[@id="billing:lastname"]'); }
	get billingEmail() { return $('//*[@id="billing:email"]'); }
	get billingAddress() { return $('//*[@id="billing:street1"]'); }
	get billingCity() { return $('//*[@id="billing:city"]'); }
	get billingState() { return $('//*[@id="billing:region_id"]'); }
	get billingZip() { return $('//*[@id="billing:postcode"]'); }
	get billingTelephone() { return $('//*[@id="billing:telephone"]'); }
	get billingPw() { return $('//*[@id="billing:customer_password"]'); }
	get billingConfirmPw() { return $('//*[@id="billing:confirm_password"]'); }
	get billingContinueBtn() { return $('#billing-buttons-container > button.button.continue'); }
	get vtbShipToThisAddresslabel() { return $('#co-billing-form > div > ul > li:nth-child(2) > label'); }
	get shippingAddressForm() { return $('#co-shipping-form'); }
	get shippingMethodForm() { return $('#co-shipping-method-form'); }
	get vtbStandardShippingLabel() { return $('#checkout-shipping-method-load > dl > dd:nth-child(2) > ul > li > label'); }
	get vtbStandardShippingRadioBtn() {return $('#s_method_shqups-standard-calendar_gdg'); }
	get shippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button.button.continue'); }
	get marketingQuestion1() { return $('#marketing-questions > li > input'); }
	get paymentMethodForm() { return $('#co-payment-form'); }
	get moneyOrderRadioBtn() { return $('#p_method_checkmo'); }
	get moneyOrderLabel() { return $('#checkout-payment-method-load > dt:nth-child(8) > label'); }
	get pjgMoneyOrderLabel() { return $('label*=Check / Money order'); }
	get ccLabel() { return $('#checkout-payment-method-load > dt:nth-child(3) > label'); }
	get ccNum() { return $('#chaseorbitalgateway_cc_number'); }
	get ccExpMon() { return $('#chaseorbitalgateway_expiration'); }
	get ccExpYr() { return $('#chaseorbitalgateway_expiration_yr'); }
	get ccVerifyNum() { return $('#chaseorbitalgateway_cc_cid'); }
	get paymentMethodContinueBtn() { return $('#paypal-save-button'); }
	get orderReview() { return $('#opc-review'); }
	get marketingQuestion2() { return $('#marketing-question-two'); }
	get placeOrderButton() { return $('#review-buttons-container > button'); }

	//order success page elements
	get orderSuccessPageHeading() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.page-title'); }
	get orderNumText() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > p:nth-child(3)'); }

	submitGuestCheckoutForm(em) {
		this.vtbGuestEmail.setValue(em);
		this.vtbGuestContinueBtn.click();
	}

	//logged in customer 
	submitBillingForm(fn, ln, add, city, st, zip, phone, type, pw) {
		this.billingFName.setValue(fn);
		this.billingLName.setValue(ln);
		//this.billingEmail.setValue(em);
		this.billingAddress.setValue(add);
		this.billingCity.setValue(city);
		this.billingState.selectByVisibleText(st);
		this.billingZip.setValue(zip);
		this.billingTelephone.setValue(phone);

		if (type && pw) {
			this.billingPw.setValue(pw);
			this.billingConfirmPw.setValue(pw);
		}

		this.billingAddressForm.submitForm();
	}

	submitShippingMethodForm() {
		this.shippingMethodForm.submitForm();
	}

	submitPaymentMethodForm() {
		this.paymentMethodForm.submitForm();
	}

	fillCCForm(num, expmon, expyr, ccv) {
		this.ccNum.setValue(num);
		this.ccExpMon.selectByVisibleText(expmon);
		this.ccExpYr.selectByVisibleText(expyr);	
		this.ccVerifyNum.setValue(ccv);	
	}

	loginAtCheckout() {
		this.email.setValue('luke.fitzgerald@blueacorn.com');
		this.pw.setValue('pass4luke');

		this.loginForm.submitForm();
	}

}

module.exports = new Checkout();