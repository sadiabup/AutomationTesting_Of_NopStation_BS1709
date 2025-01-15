import { expect, test } from "../fixture/testFixture";
 
/*test.use({
    browserName: "chromium" // how to run in different browser
}) */
//const email = "sadia1@gmail.com";
const email = "sadia111@gmail.com";
const password = "12345678";
const url = "https://test460.nop-station.com/en/";
 
test.describe("Page object test demo", async () => {
 
 
test("Register test_01", async ({ page, registrationPage }) => {
 
   // const register = new RegistrationPage(page);
await page.goto(url);
 await registrationPage.register();
//expect(register.enterGender()).toBeChecked();
await registrationPage.enterFirstName("Sadia");
await registrationPage.enterLasttName("Sultana");
await registrationPage.DateOfBirth("25.08.1850");
await registrationPage.enterEmail(email);
await registrationPage.enterCompanyDetails("");
await registrationPage.enterOptions();
await registrationPage.enterPassword(password);
await registrationPage.enterConfirmPassword(password);
await registrationPage.clickRegister();
await registrationPage.registerCompletedMessage();
 
})
 
test("Login test_02", async ({ page, loginPage }) => {
 
    //const login = new LoginPage(page);
    await page.goto(url);
    await loginPage.logIn();
    
    const signInMsg = await page.locator("//div[@class='page-title']");
    const actualMsg = await signInMsg.textContent();
    console.log("Actual SignIn Message:", actualMsg);
    // Assert the message (update as needed for exact or partial match)
    expect(actualMsg).toBe("Welcome, Please Sign In!");
    
    await loginPage.getPageTitle();
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.checkedRememberMe();
   // await loginPage.clickLogin();
 
 
    // From the Terminal we can read Actual value vs Expected value
 
    //const welcomeMsg = await page.locator("//h2[text()='Welcome to our store']");
    //const actualMsg1 = await welcomeMsg.textContent();
    //console.log("Actual Welcome Message:", actualMsg);
    //expect(actualMsg1).toBe("Welcome to our store");
 
    
 
})
 
test("Add to cart test_03", async ({ page, loginPage, homePage, books}) => {
    //const login = new LoginPage(page);
    //const homepage = new HomePage(page);
    //const books = new Books(page);
 
    await page.goto(url);
    await loginPage.logIn();
    await loginPage.login(email, password);
    await books.clearCart();
 
    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
   
 
   
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
    //await books.updateQuantityForProduct("Vintage Style Engagement Ring", 5);
    await books.addressMessage();
})
 
test("Checkout test_04", async ({ page, loginPage, homePage, books, checkout }) => {
 
    await page.goto(url);
    await loginPage.logIn();
    await loginPage.login(email, password);

    await books.clearCart();

    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();  
 
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
 
    await checkout.enterFirstName("");
    await checkout.enterLastName("");
    await checkout.enterEmail("");
    await checkout.enterCompanyName("BS");
    await checkout.enterCountryName("Bangladesh");
    await checkout.enterStateName("ঢাকা");
    await checkout.enterCityName("Dhaka");
    await checkout.enterAddress1("Cantonment");
    await checkout.enterAddress2("");
    await checkout.enterZip("123");
    await checkout.enterPhoneNo("019299999999");
    await checkout.enterFaxNo("");
 
 await checkout.clickNext();
 await checkout.clickNext2();
 await checkout.clickNext3();  
 await checkout.clickNext4();
 await checkout.clickConfirmOrder();
 await checkout.verifyThankYouMessage();
 await checkout.clickConfirmOrderDetailsLink();
 
})
 
})