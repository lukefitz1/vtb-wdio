describe("Open account create page", function () {
    this.timeout(20000);

    it("should create a new VTB customer account", function () {
        // browser.url(baseUrlSecure + "/customer/account/create");
        //prod
        browser.url(baseUrl + "/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate random string for email
        rand = base.generateRandomString();

        //submit create account form
        account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 'pass4luke');
        //account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.acctCreateSuccessMessage.isVisible()).to.be.true;
    });

    it("should create a new PJJ customer account", function () {
        //browser.url(pjjUrlSecure + "/customer/account/create");
        //prod
        browser.url(pjjUrl + "/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate random string for email
        rand = base.generateRandomString();

        //submit create account form
        account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 'pass4luke');
        //account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.acctCreateSuccessMessage.isVisible()).to.be.true;
    });

    it("should create a new PJG customer account", function () {
        //browser.url(pjgUrlSecure + "/customer/account/create");
        //prod
        browser.url(pjgUrl + "/customer/account/create");

        //assert that the login form is displayed on page load
        expect(account.accountCreateForm.isVisible()).to.be.true;
        expect(account.submitBtn.isVisible()).to.be.true;

        //generate random string for email
        rand = base.generateRandomString();

        //submit create account form
        account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-' + rand + '@blueacorn.com', 'pass4luke');
        //account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald-test2@blueacorn.com', 'pass4luke');

        //assert that you made it to the dashboard page
        expect(account.dashboard.isVisible()).to.be.true;
        expect(account.acctCreateSuccessMessage.isVisible()).to.be.true;
    });
});
