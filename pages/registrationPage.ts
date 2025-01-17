import { Page, expect } from "@playwright/test";

export default class RegisterPage {
  constructor(private page: Page) {}

  // Locators
  private locators = {
    registerLink: "//a[@class='ico-register' and text()='Register']",
    gender: "//input[@type='radio' and contains(@value, 'F')]",
    firstName: "//input[@name='FirstName']",
    lastName: "//input[@name='LastName']",
    dateOfBirth: "//select[@name='DateOfBirthDay']",
    email: "//input[@name='Email']",
    company: "//input[@name='Company']",
    newsletter: "//input[@type='checkbox' and @name='Newsletter']",
    password: "//input[@type='password' and @id='Password']",
    confirmPassword: "//input[@type='password' and @name='ConfirmPassword']",
    registerButton: "//button[@type='submit' and @name='register-button']",
    registrationMessage: "//div[@class='result xh-highlight']"
  };

  // Actions
  async register() {
    await this.page.locator(this.locators.registerLink).click();
  }

  async enterGender() {
    await this.page.locator(this.locators.gender).check();
  }

  async enterFirstName(firstName: string) {
    await this.page.locator(this.locators.firstName).type(firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.locator(this.locators.lastName).type(lastName);
  }

  async enterDateOfBirth(dateOfBirth: string) {
    await this.page.locator(this.locators.dateOfBirth).selectOption(dateOfBirth);
  }

  async enterEmail(email: string) {
    await this.page.locator(this.locators.email).type(email);
  }

  async enterCompany(company: string) {
    await this.page.locator(this.locators.company).type(company);
  }

  async enterNewsletterOption() {
    await this.page.locator(this.locators.newsletter).check();
  }

  async enterPassword(password: string) {
    await this.page.locator(this.locators.password).type(password);
  }

  async enterConfirmPassword(password: string) {
    await this.page.locator(this.locators.confirmPassword).type(password);
  }

  async clickRegister() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator(this.locators.registerButton).click()
    ]);
  }

  async registerCompletedMessage() {
    const registrationMessage = await this.page.locator(this.locators.registrationMessage);
    expect(await registrationMessage.isVisible()).toBe(false);
  }
}
