class Cart {
	//VTB
	get vtbCheckoutBtn() { return $(''); }

	//PJJ
	get pjjCheckoutBtn() { return $(''); }

	//PLG
	get pjgCheckoutBtn() { return $('body > div.wrapper > div > div.main-container.col1-layout > div > div > div > div.page-title.title-buttons > ul > li > button'); }
}

module.exports = new Cart();