import { Page , expect } from "@playwright/test";
 
export default class RegisterPage{
 
        constructor(public page: Page){
 
        }
        async register(){
            return this.page.locator("//a[@class='ico-register' and text()='Register']").click();
        }
 
        async enterGender(){
        return this.page.locator("//input[@type='radio' and contains(@value, 'F')] ");
           
        }
 
 
        async enterFirstName(firstname: string){
        await this.page.locator("//input[@name= 'FirstName']")
        .type(firstname);
        }
         
        async enterLasttName(lastname: string){
        await this.page.locator("//input[@name= 'LastName'] ")
        .type(lastname);
        }
 
        async DateOfBirth(dateofbirth: string){
        await this.page.locator("//select[@name='DateOfBirthDay'] ")
        .type(dateofbirth)
        }
 
        async enterEmail(email: string){
        await this.page.locator("//input[@name='Email'] ")
        .type(email);
        }
 
        async enterCompanyDetails(company: string){
        await this.page.locator("//input[@name='Company'] ")
        .type(company);
        }
 
        async enterOptions(){
        return this.page.locator("//input[@type='checkbox' and @name='Newsletter'] ")
        }
 
        async enterPassword(password: string){
        await this.page.locator("//input[@type='password' and @id='Password'] ")
        .type(password);
        }
 
        async enterConfirmPassword(password: string){
        await this.page.locator("//input[@type='password' and @name='ConfirmPassword'] ")
        .type(password);
        }
 
        async clickRegister(){
            await Promise.all([
                this.page.waitForNavigation({waitUntil:"networkidle"}),
                this.page.click("//button[@type='submit' and @name='register-button'] ")
            ])
       
        }


       
        async registerCompletedMessage() {
                const firstMsg = await this.page.locator("//div[@class='result xh-highlight']");
                
           
                // Wait for the message to appear
                //await thankYouMessage.waitFor({ state: 'visible' });
           
                // Assert it is visible
                expect(await firstMsg.isVisible()).toBe(false);
                
            }
 
                       
                   
               
 
    }
 