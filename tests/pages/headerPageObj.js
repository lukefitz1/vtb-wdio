class Header {
	//VTB
	get vtbHeader() { return $('#top-header'); }
	get vtbLogo() { return $('#top-header > div > a'); }
	get vtbSearchlabel() { return $('#search_mini_form > div > label'); }
	get vtbSearch() { return $('#search'); }
	get vtbMiniCartIcon() { return $('#top-header > div > div.skip-links > div.account-cart-wrapper > div > a'); }
	get vtbMiniCartDropdown() { return $('#header-cart'); }
	get vtbMiniCartCheckoutBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > ul > li > a'); }
	get vtbMiniCartCartBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > a'); }

	//PJJ
	get pjjHeader() { return $('#top-header'); }
	get pjjLogo() { return $('#top-header > div > a'); }
	get pjjSearchlabel() { return $('#search_mini_form > div > label'); }
	get pjjSearch() { return $('#search'); }
	get pjjMiniCartIcon() { return $('#top-header > div > div.skip-links > div.account-cart-wrapper > div > a'); }
	get pjjMiniCartDropdown() { return $('#header-cart'); }
	get pjjMiniCartCheckoutBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > ul > li > a'); }
	get pjjProductPageModal() { return $('#monetate_lightbox_content_container'); }
	get pjjProductPageModalMask() { return $('#monetate_lightbox_mask'); }

	//PLG
	get pjgHeader() { return $('#top-header'); }
	get pjgLogo() { return $('#top-header > div > a'); }
	get pjgSearchlabel() { return $('#search_mini_form > div > label'); }
	get pjgSearch() { return $('#search'); }
	get pjgMiniCartIcon() { return $('#top-header > div > div.skip-links > div.account-cart-wrapper > div.header-minicart > a'); }
	get pjgMiniCartDropdown() { return $('#header-cart'); }
	get pjgMiniCartCartBtn() { return $('#header-cart > div.minicart-wrapper > div.minicart-actions > a'); }
	get pjgMiniCartCheckoutBtn() { return $(''); }
}

module.exports = new Header();