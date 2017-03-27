class ProductPage {
	//vermont teddy bear
	get vtbAddToCart() { return $('#product_addtocart_form > div.add-to-cart-wrapper > div > div.add-to-cart > div.add-to-cart-buttons > button'); }
	
	//pajama jeans
	get pjjAddToCart() { return $(''); }

	//pajagram
	get pjgAddToCart() { return $(''); }
}

module.exports = new ProductPage();