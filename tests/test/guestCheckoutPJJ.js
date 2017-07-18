describe("Guest checkout - should complete guest checkout on B2C site", function() {
    this.timeout(30000);

    it("should add product to cart, click cart button", function () {
        browser.url(pjjUrl + "/pajamajeans-for-men-vintage-wash");

        //wait for the stupid modal to show up, and then click outside of it to close
        header.pjjProductPageModal.waitForVisible();
        header.pjjProductPageModalMask.click();

        //Ensure add to cart button is visible
        prod.pjjAddToCart.waitForVisible();
        expect(prod.pjjAddToCart.isVisible()).to.be.true;
        
        //configure product, add to cart (they dont really have simples)
        prod.pjjConfigurableOption.click();
        prod.pjjAddToCart.click();
        
        //wait for mini cart to display, go to checkout
        header.pjjMiniCartDropdown.waitForVisible();
        header.pjjMiniCartCheckoutBtn.waitForVisible();

        if (env === 'stage') {
            browser.url(pjjUrlSecure + "/checkout/onepage");
        } else if (env === 'prod') {
            header.header.pjjMiniCartCheckoutBtn.click();
        }
    });
    
    it("should select checkout method", function() {
        checkout.vtbGuestCheckoutForm.waitForVisible();
        checkout.submitGuestCheckoutForm('luke.fitzgerald@blueacorn.com');
    });

    /*it("should submit billing address form", function() {
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
        checkout.pjgMoneyOrderLabel.waitForVisible();
        checkout.paymentMethodContinueBtn.waitForVisible();
        
        //select payment methods
        if (env === 'stage') {
            //dont remove this pause statement
            browser.pause(500);
            checkout.pjgMoneyOrderLabel.click();    
        } else if (env === 'prod') {
            checkout.ccLabel.click();
            checkout.fillCCForm('4111111111111111', '08', '2019', '158');
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
    });*/
});