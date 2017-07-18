class ProductPage {
	//vermont teddy bear
	get vtbAddToCart() { return $('#product_addtocart_form > div.add-to-cart-wrapper > div > div.add-to-cart > div.add-to-cart-buttons > button'); }
	
	//pajama jeans
	get pjjConfigurableOption() { return $('#option706 > a'); }
	get pjjAddToCart() { return $('#product_addtocart_form > div.product-shop > div.product-options-bottom.jumbo-price > div.add-to-cart > div.add-to-cart-buttons > button'); }

	//pajagram
	get pjgAddToCart() { return $('#product_addtocart_form > div.add-to-cart-wrapper > div > div > div.add-to-cart-buttons > button'); }
}

module.exports = new ProductPage();