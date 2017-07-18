describe("Guest checkout - should complete guest checkout on B2C site", function() {
    this.timeout(30000);

    it("should add product to cart, click checkout button", function () {
        browser.url("/display-stand-for-15-bears");

        //Ensure add to cart button is visible
        expect(prod.vtbAddToCart.isVisible()).to.be.true;
        
        //add simple product to cart
        prod.vtbAddToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.vtbMiniCartDropdown.waitForVisible();
        header.vtbMiniCartCheckoutBtn.waitForVisible();
        //header.vtbMiniCartCheckoutBtn.click();

        if (env === 'stage') {
            browser.url(baseUrlSecure + "/checkout/onepage");
        } else if (env === 'prod') {
            header.vtbMiniCartCheckoutBtn.click();
        }
    });
    
    it("should select checkout method", function() {
        checkout.vtbGuestCheckoutForm.waitForVisible();
        checkout.submitGuestCheckoutForm('luke.fitzgerald@blueacorn.com');
    });

    it("should submit billing address form", function() {
        //submit billing address form
        checkout.billingAddressForm.waitForVisible();
        checkout.submitBillingForm('Luke', 'Fitzgerald', 
            '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
            'guest');
    });

    it("should submit shipping method form", function() {
        //shipping method auto selected, so no need to select one, submit form
        checkout.shippingMethodForm.waitForVisible();
        checkout.shippingMethodContinueBtn.waitForVisible();
        checkout.marketingQuestion1.setValue('This is a test');
        checkout.submitShippingMethodForm();
    });

    it("should submit payment method form", function() {
        //ensure payment method elements are displayed
        checkout.paymentMethodForm.waitForVisible();
        checkout.moneyOrderLabel.waitForVisible();
        checkout.paymentMethodContinueBtn.waitForVisible();
        
        //select payment methods
        if (env === 'stage') {
            //dont remove this pause statement
            browser.pause(500);
            checkout.moneyOrderLabel.click();    
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            //checkout.fillCCForm('4111111111111111', '08', '2019', '158');
            checkout.fillCCForm('', '08', '2019', '158');
        }
        
        checkout.paymentMethodContinueBtn.click();
    });

    it("should submit order", function() {
        //place order
        checkout.orderReview.waitForVisible();
        checkout.placeOrderButton.waitForVisible();
        checkout.marketingQuestion2.setValue('This is a test');
        checkout.placeOrderButton.click();
    });

    it("should review order success page", function() {
        //order success page
        checkout.orderSuccessPageHeading.waitForVisible();
        console.log(checkout.orderNumText.getText());
    });
});