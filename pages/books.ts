import { Page, expect } from "@playwright/test";
import { booksLocators } from "../dataFile/locators";

export default class Books {
  constructor(private page: Page) {}

  async clearCart() {
    const cartIcon = this.page.locator(booksLocators.cartIcon);
    await cartIcon.hover();
    await cartIcon.click();

    const emptyCartMessage = this.page.locator(booksLocators.emptyCartMessage);
    if (await emptyCartMessage.isVisible()) {
      console.log("Cart is already empty.");
      return;
    }

    while (true) {
      const removeButtons = this.page.locator(booksLocators.removeButton);
      if ((await removeButtons.count()) === 0) {
        console.log("Your Shopping Cart is empty!");
        break;
      }
      await removeButtons.nth(0).click();
      await this.page.waitForTimeout(1000);
    }
  }

  async addFirstAndSecondProductsToCart() {
    const addToCartButtons = this.page.locator(booksLocators.addToCartButton);
    await addToCartButtons.nth(0).click();
    await this.page.locator(booksLocators.popupMessage).waitFor({ state: "visible" });
    await addToCartButtons.nth(1).click();
    await this.page.locator(booksLocators.popupMessage).waitFor({ state: "visible" });
    await this.page.locator(booksLocators.closeButton).click();

    const cartIcon = this.page.locator(booksLocators.cartIcon);
    await cartIcon.hover();
    await cartIcon.click();
  }

  async updateQuantityForProduct(productName: string, quantity: number) {
    const productRow = this.page.locator(booksLocators.productRow(productName));
    const quantityInput = productRow.locator(booksLocators.quantityInput);
    const updateCartButton = this.page.locator(booksLocators.updateCartButton);

    await quantityInput.waitFor({ state: "visible", timeout: 10000 });
    await quantityInput.fill(quantity.toString());
    await updateCartButton.click();
    await this.page.locator(booksLocators.termsCheckbox).check();
    await this.page.locator(booksLocators.checkoutButton).click();
  }

  async verifyBillingAddressPage() {
    const billingAddressMessage = this.page.locator(booksLocators.billingAddressMessage);
    expect(await billingAddressMessage.isVisible()).toBe(true);
  }
}
