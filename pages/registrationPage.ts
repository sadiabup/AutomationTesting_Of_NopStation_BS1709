import { Page, expect } from "@playwright/test";
import { registerLocators } from "../dataFile/locators";

export default class RegisterPage {
  constructor(private page: Page) {}

  // Actions
  async register() {
    await this.page.locator(registerLocators.registerLink).click();
  }

  async enterGender() {
    await this.page.locator(registerLocators.gender).check();
  }

  async enterFirstName(firstName: string) {
    await this.page.locator(registerLocators.firstName).type(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.locator(registerLocators.lastName).type(lastName);
  }

  async enterDateOfBirth(dateOfBirth: string) {
    await this.page.locator(registerLocators.dateOfBirth).selectOption(dateOfBirth);
  }

  async enterEmail(email: string) {
    await this.page.locator(registerLocators.email).type(email);
  }

  async enterCompany(company: string) {
    await this.page.locator(registerLocators.company).type(company);
  }

  async enterNewsletterOption() {
    await this.page.locator(registerLocators.newsletter).check();
  }

  async enterPassword(password: string) {
    await this.page.locator(registerLocators.password).type(password);
  }

  async enterConfirmPassword(password: string) {
    await this.page.locator(registerLocators.confirmPassword).type(password);
  }

  async clickRegister() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator(registerLocators.registerButton).click()
    ]);
  }

  async registerCompletedMessage() {
    const registrationMessage = await this.page.locator(registerLocators.registrationMessage);
    expect(await registrationMessage.isVisible()).toBe(false);
  }
}
