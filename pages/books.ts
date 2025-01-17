import { Page, expect } from "@playwright/test";

export default class Books {
  constructor(private page: Page) {}

  // Locators
private locators = {
cartIcon: "//a[@class='ico-cart']",
emptyCartMessage: "//span[@class='cart-qty' and text()='(0)']",
removeButton: "//button[@name='updatecart' and @class='remove-btn']",
addToCartButton: "//button[contains(text(), 'Add to cart')]",
popupMessage: "//p[contains(text(), 'The product has been added to your')]",
closeButton: "//span[@class='close' and @title='Close']",
termsCheckbox: "//input[@type='checkbox' and @name='termsofservice']",
checkoutButton: "//button[@type='submit' and @name='checkout']",
productRow: (productName: string) => `//tr[contains(., '${productName}')]`,
quantityInput: "//input[contains(@name, 'itemquantity') and contains(@class, 'qty-input')]",
updateCartButton: "//button[@type='submit' and @name='updatecart']",
billingAddressMessage: "//h1[text()='Billing address']",
  };

  
async clearCart() {
const cartIcon = this.page.locator(this.locators.cartIcon);
await cartIcon.hover();
await cartIcon.click();

const emptyCartMessage = this.page.locator(this.locators.emptyCartMessage);
if (await emptyCartMessage.isVisible()) {
console.log("Cart is already empty.");
return;
}

while (true) {
const removeButtons = this.page.locator(this.locators.removeButton);
if ((await removeButtons.count()) === 0) {
console.log("Your Shopping Cart is empty!");
break;
}
await removeButtons.nth(0).click();
await this.page.waitForTimeout(1000);
}
  }

  
async addFirstAndSecondProductsToCart() {
const addToCartButtons = this.page.locator(this.locators.addToCartButton);
await addToCartButtons.nth(0).click();
await this.page.locator(this.locators.popupMessage).waitFor({ state: "visible" });
await addToCartButtons.nth(1).click();
await this.page.locator(this.locators.popupMessage).waitFor({ state: "visible" });
await this.page.locator(this.locators.closeButton).click();
const cartIcon = this.page.locator(this.locators.cartIcon);
await cartIcon.hover();
await cartIcon.click();
  }

  
async updateQuantityForProduct(productName: string, quantity: number) {
const productRow = this.page.locator(this.locators.productRow(productName));
const quantityInput = productRow.locator(this.locators.quantityInput);
const updateCartButton = this.page.locator(this.locators.updateCartButton);

await quantityInput.waitFor({ state: "visible", timeout: 10000 });
await quantityInput.fill(quantity.toString());
await updateCartButton.click();
await this.page.locator(this.locators.termsCheckbox).check();
await this.page.locator(this.locators.checkoutButton).click();
  
}

async verifyBillingAddressPage() {
const billingAddressMessage = this.page.locator(this.locators.billingAddressMessage);
expect(await billingAddressMessage.isVisible()).toBe(true);
  }
  
}
