class MyAccount {
	get loginForm() { return $('#login-form'); }
	get un() { return $('#email'); }
	get pw() { return $('#pass'); }
	get loginBtn() { return $('#send2'); }
	get dashboard() { return $('body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div > div'); }
	get registerBtn() { return $('#login-form > div > div.col-1.new-users > div > div > button'); }
	get accountCreateForm() { return $('#form-validate'); }
	get fn() { return $('#firstname'); }
	get ln() { return $('#lastname'); }
	get email() { return $('#email_address'); }
	get createPw() { return $('#password'); }
	get confirmPw() { return $('#confirmation'); }
	get submitBtn() { return $('#form-validate > div.buttons-set > button'); }
	get acctCreateSuccessMessage() { return $('body > div.wrapper > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li'); }

	login(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	createAccount(fn, ln, em, pw) {
		this.fn.setValue(fn);
		this.ln.setValue(ln);
		this.email.setValue(em);
		this.createPw.setValue(pw);
		this.confirmPw.setValue(pw);

		this.accountCreateForm.submitForm();
	}

}

module.exports = new MyAccount();