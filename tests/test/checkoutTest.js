describe("Checkout steps - ", function () {
    //set custom timeout for these tests, since they have multiple steps
    this.timeout(30000)
    
    describe("Guest checkout - should complete guest checkout on B2C site", function() {
        it("should add product to cart, click checkout button", function () {
            browser.url("/display-stand-for-15-bears");

            //Ensure add to cart button is visible
            expect(prod.vtbAddToCart.isVisible()).to.be.true;
            
            //add simple product to cart
            prod.vtbAddToCart.click();
            
            //wait for mini cart to display, go to checkout
            header.vtbMiniCartDropdown.waitForVisible();
            header.vtbMiniCartCheckoutBtn.waitForVisible();
            header.vtbMiniCartCheckoutBtn.click();
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
            checkout.vtbMarketingQuestion1.setValue('This is a test');
            checkout.submitShippingMethodForm();
        });

        it("should submit payment method form", function() {
            //select payment method (cc), submit form
            checkout.paymentMethodForm.waitForVisible();
            
            if (env === 'stage') {
                checkout.mailCheckRadioBtn.click();    
            } else if (env === 'prod') {
                checkout.ccLabel.click();
                checkout.fillCCForm('4111111111111111', '08', '2019', '158');
            }
            
            checkout.submitPaymentMethodForm();
            browser.pause(3000);
        });

        /*it("should submit order", function() {
            //place order
            checkout.orderReview.waitForVisible();
            checkout.placeOrderButton.waitForVisible();
            checkout.vtbMarketingQuestion2.setValue('This is a test');
            browser.pause(3000);
            //checkout.placeOrderButton.click();
        });

        /*it("should review order success page", function() {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible();
            console.log(checkout.orderNumText.getText());
        });*/
    });

    /*describe("Register on checkout - should complete register on checkout on B2C site", function() {
        it("should add product to cart, click checkout button", function () {
            browser.url("/green-home/water-filtration/lifestraw");

            //Ensure add to cart button is visible
            expect(prod.addToCart.isVisible()).to.be.true;
            
            //add simple product to cart
            prod.addToCart.click();
            
            //wait for mini cart to display, go to checkout
            header.miniCartDropdown.waitForVisible();
            header.miniCartCheckoutBtn.waitForVisible();
            header.miniCartCheckoutBtn.click();
        });
        
        it("should click checkout button on cart page", function() {
            //Ensure checkout button is visible
            expect(cart.checkoutBtn.isVisible()).to.be.true;

            //Click checkout button
            cart.checkoutBtn.click();
        });

        it("should submit billing address form with pw", function() {
            //generate random string for email
            rand = base.generateRandomString();

            //submit billing address form
            checkout.billingAddressForm.waitForVisible();
            checkout.registerLabel.click();
            checkout.billingPw.waitForVisible();

            checkout.submitBillingForm('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 
                '145 Williman St', 'Charleston', 'South Carolina', '29403', '8779442583', 
                'register', 'pass4luke');
        });

        it("should submit shipping method form", function() {
            //shipping method auto selected, so no need to select one, submit form
            checkout.shippingMethodForm.waitForVisible();
            checkout.shippingMethodContinueBtn.waitForVisible();
            checkout.submitShippingMethodForm();
        });

        it("should submit payment method form", function() {
            //select payment method (cc), submit form
            checkout.paymentMethodForm.waitForVisible();
            
            if (env === 'stage') {
                checkout.mailCheckRadioBtn.click();    
            } else if (env === 'prod') {
                checkout.ccLabel.click();
                checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            }
            
            checkout.submitPaymentMethodForm();
        });

        it("should submit order", function() {
            //place order
            checkout.orderReview.waitForVisible();
            checkout.placeOrderButton.waitForVisible();
            checkout.placeOrderButton.click();
        });

        it("should review order success page", function() {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible();
            console.log(checkout.orderNumText.getText());
        });

        it("should logout", function() {
            browser.url("/customer/account/logout");
        })
    });

    describe("Guest checkout - should login at checkout on B2C site", function() {
        it("should add product to cart, click checkout button", function () {
            browser.url("/green-home/water-filtration/lifestraw");

            //Ensure add to cart button is visible
            expect(prod.addToCart.isVisible()).to.be.true;
            
            //add simple product to cart
            prod.addToCart.click();
            
            //wait for mini cart to display, go to checkout
            header.miniCartDropdown.waitForVisible();
            header.miniCartCheckoutBtn.waitForVisible();
            header.miniCartCheckoutBtn.click();
        });

        it("should click checkout button on cart page", function() {
            //Ensure checkout button is visible
            expect(cart.checkoutBtn.isVisible()).to.be.true;

            //Click checkout button
            cart.checkoutBtn.click();
        });

        it("should login at checkout", function() {
            checkout.signInLink.waitForVisible();
            checkout.signInLink.click();

            checkout.loginForm.waitForVisible();
            expect(checkout.loginForm.isVisible()).to.be.true;

            checkout.loginAtCheckout('luke.fitzgerald@blueacorn.com', 'pass4luke');
        });

        it("should submit billing address form with already saved address", function() {
            //submit billing address form
            checkout.billingAddressForm.waitForVisible();
            
            //on staging, ship to a different address is selected by default 
            //so you need to select ship to same address radio
            if (env === "stage") {
                checkout.shipToThisAddresslabel.click();
            }
            
            checkout.billingContinueBtn.click();
        });

        it("should submit shipping method form", function() {
            //select shipping method, submit form
            checkout.shippingMethodForm.waitForVisible();
            checkout.groundShippingLabel.click();
            checkout.submitShippingMethodForm();

        });

        it("should submit payment method form", function() {
            //select payment method (cc), submit form
            checkout.paymentMethodForm.waitForVisible();
            
            if (env === 'stage') {
                checkout.moneyOrderRadioBtn.click();    
            } else if (env === 'prod') {
                checkout.ccLabel.click();
                checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            }
            
            checkout.submitPaymentMethodForm();
        });

        it("should submit order", function() {
            //place order
            checkout.orderReview.waitForVisible();
            checkout.placeOrderButton.waitForVisible();
            checkout.termsLabel.click();
            checkout.placeOrderButton.click();
        });

        it("should review order success page", function() {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible();
            console.log(checkout.orderNumText.getText());
        });   
    });

    describe.only("Customer checkout - should login, add product to cart, then complete checkout", function() {
        it("login to customer account", function() {
            browser.url("/customer/account/login");

            //assert that the login form is displayed on page load
            expect(account.loginForm.isVisible()).to.be.true;
            expect(account.loginBtn.isVisible()).to.be.true;

            //login
            account.login('luke.fitzgerald@blueacorn.com', 'pass4luke');

            //assert that you made it to the dashboard page
            expect(account.dashboard.isVisible()).to.be.true;
        });

        it("should add product to cart, click checkout button", function () {
            //go to product page
            browser.url("/green-home/water-filtration/lifestraw");

            //Ensure add to cart button is visible, mini cart is not visible
            expect(prod.addToCart.isVisible()).to.be.true;
            expect(header.miniCartDropdown.isVisible()).to.be.false;
            
            //add simple product to cart
            prod.addToCart.click();
            
            //wait for mini cart to display, go to checkout
            header.miniCartDropdown.waitForVisible();
            header.miniCartCheckoutBtn.waitForVisible();
            header.miniCartCheckoutBtn.click();
        });

        it("should submit billing address form", function() {
            //submit billing address form
            checkout.billingAddressForm.waitForVisible();
            checkout.billingContinueBtn.click();
        });

        it("should submit shipping method form", function() {
            //select shipping method, submit form
            checkout.shippingMethodForm.waitForVisible();
            checkout.groundShippingLabel.click();
            checkout.submitShippingMethodForm();

        });

        it("should submit payment method form", function() {
            //select payment method (cc), submit form
            checkout.paymentMethodForm.waitForVisible();
            
            if (env === 'stage') {
                checkout.moneyOrderRadioBtn.click();    
            } else if (env === 'prod') {
                checkout.ccLabel.click();
                checkout.fillCCForm('Visa', '4111111111111111', '04 - April', '2023', '123');
            }
            
            checkout.submitPaymentMethodForm();
        });

        it("should submit order", function() {
            //place order
            checkout.orderReview.waitForVisible();
            checkout.placeOrderButton.waitForVisible();
            checkout.termsLabel.click();
            checkout.placeOrderButton.click();
        });

        it("should review order success page", function() {
            //order success page
            checkout.orderSuccessPageHeading.waitForVisible();
            console.log(checkout.orderNumText.getText());
        });
    });*/
});