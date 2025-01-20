import { Page, expect } from "@playwright/test";
import { checkoutLocators } from "../dataFile/locators";

export default class Checkout {
  constructor(public page: Page) {}

  private async fillField(locator: string, value: string) {
    if (value) await this.page.fill(locator, value);
  }

  async fillBillingDetails(details: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    country: string;
    state: string;
    city: string;
    address1: string;
    address2: string;
    zip: string;
    phone: string;
    fax: string;
  }) {
    await this.fillField(checkoutLocators.firstName, details.firstName);
    await this.fillField(checkoutLocators.lastName, details.lastName);
    await this.fillField(checkoutLocators.email, details.email);
    await this.fillField(checkoutLocators.company, details.company);

    const countryDropdown = this.page.locator(checkoutLocators.country);
    await countryDropdown.selectOption({ label: details.country });

    const stateDropdown = this.page.locator(checkoutLocators.state);
    await stateDropdown.selectOption({ label: details.state });

    await this.fillField(checkoutLocators.city, details.city);
    await this.fillField(checkoutLocators.address1, details.address1);
    await this.fillField(checkoutLocators.address2, details.address2);
    await this.fillField(checkoutLocators.zip, details.zip);
    await this.fillField(checkoutLocators.phone, details.phone);
    await this.fillField(checkoutLocators.fax, details.fax);
  }

  async completeCheckoutSteps() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click(checkoutLocators.nextButton),
    ]);

    const shippingRadio = this.page.locator(checkoutLocators.shippingMethod);
    await shippingRadio.check();
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click(checkoutLocators.shippingNextButton),
    ]);

    const paymentRadio = this.page.locator(checkoutLocators.paymentMethod);
    await paymentRadio.check();
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click(checkoutLocators.paymentNextButton),
    ]);

    await this.page.click(checkoutLocators.paymentInfoNextButton);
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.click(checkoutLocators.confirmOrderButton),
    ]);
  }

  async verifyOrderSuccess() {
    const thankYouMessage = await this.page.textContent(checkoutLocators.thankYouMessage);
    expect(thankYouMessage).toBe("Thank you");

    const orderProcessedMessage = await this.page.textContent(checkoutLocators.orderProcessedMessage);
    expect(orderProcessedMessage).toBe("Your order has been successfully processed!");
  }

  async viewOrderDetails() {
    await this.page.click(checkoutLocators.orderDetailsLink);
  }
}
