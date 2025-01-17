import { Page, expect } from "@playwright/test";

export default class Checkout {
    constructor(public page: Page) {}

    // Locators
    private locators = {
        firstName: "//input[@type='text' and @name='BillingNewAddress.FirstName']",
        lastName: "//input[@name='BillingNewAddress.LastName']",
        email: "//input[@name='BillingNewAddress.Email']",
        company: "//input[@name='BillingNewAddress.Company']",
        country: "//select[@name='BillingNewAddress.CountryId']",
        state: "//select[@name='BillingNewAddress.StateProvinceId']",
        city: "//input[@name='BillingNewAddress.City']",
        address1: "//input[@name='BillingNewAddress.Address1']",
        address2: "//input[@name='BillingNewAddress.Address2']",
        zip: "//input[@name='BillingNewAddress.ZipPostalCode']",
        phone: "//input[@name='BillingNewAddress.PhoneNumber']",
        fax: "//input[@name='BillingNewAddress.FaxNumber']",
        nextButton: "//button[@type='submit' and @id='billingaddress-next-button']",
        shippingMethod: "//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']",
        shippingNextButton: "//button[@class='button-1 shipping-method-next-step-button']",
        paymentMethod: "//input[@type='radio' and @value='Payments.CheckMoneyOrder']",
        paymentNextButton: "//button[@class='button-1 payment-method-next-step-button']",
        paymentInfoNextButton: "//button[@class='button-1 payment-info-next-step-button']",
        confirmOrderButton: "//button[@class='button-1 confirm-order-next-step-button']",
        thankYouMessage: "//h1[contains(text(), 'Thank you')]",
        orderProcessedMessage: "//strong[contains(text(), 'Your order has been successfully processed!')]",
        orderDetailsLink: "//a[contains(text(), 'Click here for order details.')]",
    };

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
        await this.fillField(this.locators.firstName, details.firstName);
        await this.fillField(this.locators.lastName, details.lastName);
        await this.fillField(this.locators.email, details.email);
        await this.fillField(this.locators.company, details.company);

        const countryDropdown = this.page.locator(this.locators.country);
        await countryDropdown.selectOption({ label: details.country });

        const stateDropdown = this.page.locator(this.locators.state);
        await stateDropdown.selectOption({ label: details.state });

        await this.fillField(this.locators.city, details.city);
        await this.fillField(this.locators.address1, details.address1);
        await this.fillField(this.locators.address2, details.address2);
        await this.fillField(this.locators.zip, details.zip);
        await this.fillField(this.locators.phone, details.phone);
        await this.fillField(this.locators.fax, details.fax);
    }

    async completeCheckoutSteps() {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(this.locators.nextButton),
        ]);

        const shippingRadio = this.page.locator(this.locators.shippingMethod);
        await shippingRadio.check();
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(this.locators.shippingNextButton),
        ]);

        const paymentRadio = this.page.locator(this.locators.paymentMethod);
        await paymentRadio.check();
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(this.locators.paymentNextButton),
        ]);

        await this.page.click(this.locators.paymentInfoNextButton);
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle" }),
            this.page.click(this.locators.confirmOrderButton),
        ]);
    }

    async verifyOrderSuccess() {
        const thankYouMessage = await this.page.textContent(this.locators.thankYouMessage);
        expect(thankYouMessage).toBe("Thank you");

        const orderProcessedMessage = await this.page.textContent(this.locators.orderProcessedMessage);
        expect(orderProcessedMessage).toBe("Your order has been successfully processed!");
    }

    async viewOrderDetails() {
        await this.page.click(this.locators.orderDetailsLink);
    }
}
