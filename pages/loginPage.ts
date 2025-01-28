import { Page, expect } from "@playwright/test";
import { loginLocators } from "../dataFile/locators";
import login from "../dataFile/login.json"; 

export default class LoginPage {
  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.locator(loginLocators.loginLink).click();
  }

  async login(email: string, password: string) {
    await this.verifyPageTitle();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.toggleRememberMe();
    await this.clickLoginButton();
  }

  async verifyPageTitle() {
    const pageTitle = await this.page.locator(loginLocators.pageTitle).textContent();
    expect(pageTitle).toBe("Welcome, Please Sign In!");
  }

  async enterEmail(email: string) {
    await this.page.locator(loginLocators.emailInput).type(email);
  }

  async enterPassword(password: string) {
    await this.page.locator(loginLocators.passwordInput).type(password);
  }

  async toggleRememberMe() {
    await this.page.locator(loginLocators.rememberMeCheckbox).check();
  }

  async clickLoginButton() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator(loginLocators.loginButton).click(),
    ]);
  }
}
