class Header {
	//VTB
	get vtbHeader() { return $('#top-header'); }
	get vtbLogo() { return $('#top-header > div > a'); }
	get vtbSearchlabel() { return $('#search_mini_form > div > label'); }
	get vtbSearch() { return $('#search'); }
	get vtbMiniCartIcon() { return $('#top-header > div > div.skip-links > div.account-cart-wrapper > div > a'); }
	get vtbMiniCartDropdown() { return $('#header-cart'); }
	get vtbMiniCartCheckoutBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > ul > li > a'); }

	//PJJ
	get pjjHeader() { return $(''); }
	get pjjLogo() { return $(''); }
	get pjjSearchlabel() { return $(''); }
	get pjjSearch() { return $(''); }
	get pjjMiniCartIcon() { return $(''); }
	get pjjMiniCartDropdown() { return $(''); }
	get pjjMiniCartCheckoutBtn() { return $(''); }

	//PLG
	get pjgHeader() { return $(''); }
	get pjgLogo() { return $(''); }
	get pjgSearchlabel() { return $(''); }
	get pjgSearch() { return $(''); }
	get pjgMiniCartIcon() { return $(''); }
	get pjgMiniCartDropdown() { return $(''); }
	get pjgMiniCartCheckoutBtn() { return $(''); }
}

module.exports = new Header();