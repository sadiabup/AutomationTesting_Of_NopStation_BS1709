import { Page, expect } from "@playwright/test";

export default class LoginPage {
  constructor(private page: Page) {}
  private locators = {
    emailInput: "//input[@name='Email']",
    passwordInput: "//input[@type='password' and @id='Password']",
    rememberMeCheckbox: "//input[@type='checkbox' and @name='RememberMe']",
    loginButton: "//button[@type= 'submit' and @class= 'button-1 login-button']",
    loginLink: "//a[@class='ico-login' and text()='Log in']",
    pageTitle: "//div[@class='page-title']",
  };

  async navigateToLoginPage() {
    await this.page.locator(this.locators.loginLink).click();
  }
 async login(email: string, password: string) {
    await this.verifyPageTitle();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.toggleRememberMe();
    await this.clickLoginButton();
  }
 async verifyPageTitle() {
    const pageTitle = await this.page.locator(this.locators.pageTitle).textContent();
    expect(pageTitle).toBe("Welcome, Please Sign In!");
  }

 async enterEmail(email: string) {
    await this.page.locator(this.locators.emailInput).type(email);
  }
 async enterPassword(password: string) {
    await this.page.locator(this.locators.passwordInput).type(password);
  }
 async toggleRememberMe() {
    await this.page.locator(this.locators.rememberMeCheckbox).check();
  }
 async clickLoginButton() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator(this.locators.loginButton).click(),
    ]);
  }
}
