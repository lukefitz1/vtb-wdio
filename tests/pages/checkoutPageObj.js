class Checkout {
	get vtbGuestCheckoutForm() { return $('#guest-login-form'); }
	get vtbLoginForm() { return $('#login-form'); }
	get vtbGuestContinueBtn() { return $('#onepage-guest-register-button'); }	
	get vtbEmail() { return $('#login-email'); }
	get vtbPw() { return $('#login-password'); }
	get vtbLoginButton() { return $('#checkout-step-login > div > div.col-2 > div > div > button'); }
	get vtbBillingAddressForm() { return $('#co-billing-form'); }
	get vtbBillingFName() { return $('//*[@id="billing:firstname"]'); }
	get vtbBillingLName() { return $('//*[@id="billing:lastname"]'); }
	get vtbBillingEmail() { return $('//*[@id="billing:email"]'); }
	get vtbBillingAddress() { return $('//*[@id="billing:street1"]'); }
	get vtbBillingCity() { return $('//*[@id="billing:city"]'); }
	get vtbBillingState() { return $('//*[@id="billing:region_id"]'); }
	get vtbBillingZip() { return $('//*[@id="billing:postcode"]'); }
	get vtbBillingTelephone() { return $('//*[@id="billing:telephone"]'); }
	get vtbBillingPw() { return $('//*[@id="billing:customer_password"]'); }
	get vtbBillingConfirmPw() { return $('//*[@id="billing:confirm_password"]'); }
	get vtbBillingContinueBtn() { return $('#billing-buttons-container > button.button.continue'); }
	get vtbShipToThisAddresslabel() { return $('#co-billing-form > div > ul > li:nth-child(2) > label'); }
	get vtbShippingAddressForm() { return $('#co-shipping-form'); }
	get vtbShippingMethodForm() { return $('#co-shipping-method-form'); }
	get vtbStandardShippingLabel() { return $('#checkout-shipping-method-load > dl > dd:nth-child(2) > ul > li > label'); }
	get vtbStandardShippingRadioBtn() {return $('#s_method_shqups-standard-calendar_gdg'); }
	get vtbShippingMethodContinueBtn() { return $('#shipping-method-buttons-container > button.button.continue'); }
	get vtbMarketingQuestion1() { return $('#marketing-questions > li > input'); }
	get vtbPaymentMethodForm() { return $('#co-payment-form'); }
	get vtbMoneyOrderRadioBtn() { return $('#p_method_checkmo'); }
	get vtbMoneyOrderLabel() { return $('#checkout-payment-method-load > dt:nth-child(7) > label'); }
	get vtbCcLabel() { return $('#checkout-payment-method-load > dt:nth-child(3) > label'); }
	get vtbCcNum() { return $('#chaseorbitalgateway_cc_number'); }
	get vtbCcExpMon() { return $('#chaseorbitalgateway_expiration'); }
	get vtbCcExpYr() { return $('#chaseorbitalgateway_expiration_yr'); }
	get vtbCcVerifyNum() { return $('#chaseorbitalgateway_cc_cid'); }
	get vtbOrderReview() { return $('#opc-review'); }
	get vtbMarketingQuestion2() { return $('#marketing-question-two'); }
	get vtbPlaceOrderButton() { return $('#review-buttons-container > button'); }

	//order success page elements
	get orderSuccessPageHeading() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div.page-title'); }
	get orderNumText() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > p:nth-child(3)'); }

	//logged in customer 
	submitBillingForm(fn, ln, em, add, city, st, zip, phone, type, pw) {
		this.billingFName.setValue(fn);
		this.billingLName.setValue(ln);
		this.billingEmail.setValue(em);
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

	fillCCForm(type, num, expmon, expyr,ccv) {
		this.ccType.selectByVisibleText('Visa');
		this.ccNum.setValue('4111111111111111');
		this.ccExpMon.selectByVisibleText('04 - April');
		this.ccExpYr.selectByVisibleText('2023');	
		this.ccVerifyNum.setValue('123');	
	}

	loginAtCheckout() {
		this.email.setValue('luke.fitzgerald@blueacorn.com');
		this.pw.setValue('pass4luke');

		this.loginForm.submitForm();
	}

}

module.exports = new Checkout();