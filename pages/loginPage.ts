import { Page, expect } from "@playwright/test";
 
export default class LoginPage {
    constructor(public page: Page) {}

    async logIn(){
        return this.page.locator("//a[@class='ico-login' and text()='Log in']").click();
    }
 
    async login(email: string, password: string) {
        await this.getPageTitle();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.checkedRememberMe();
        await this.clickLogin();
 
    }

    async getPageTitle() {
        return this.page.locator("//div[@class='page-title']");
    }
 
    async enterEmail(email: string) {
        await this.page.locator("//input[@name='Email']").type(email);
    }
 
    async enterPassword(password: string) {
        await this.page.locator("//input[@type='password' and @id='Password']").type(password);
    }
 
    async checkedRememberMe() {
        return this.page.locator("//input[@type='checkbox' and @name='RememberMe']");
    }
 
    async clickLogin() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("//button[@type= 'submit' and @class= 'button-1 login-button']")
        ]);
    }
}
 