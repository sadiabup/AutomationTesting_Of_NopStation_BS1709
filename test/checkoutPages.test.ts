import { expect, test } from "../fixture/testFixture";
import registration from "../dataFile/registration.json";
import login from "../dataFile/login.json";
import testData from "../dataFile/testData.json";

test.describe("Page Object Test Demo", () => {
  test("Register Test_01", async ({ page, registrationPage }) => {
    await registrationPage.navigateToRegister(registration.url);
    await registrationPage.register();
    await registrationPage.enterFirstName(registration.billingDetails.firstName);
    await registrationPage.enterLastName(registration.billingDetails.lastName);
    await registrationPage.enterEmail(registration.email);
    await registrationPage.enterCompany(registration.billingDetails.company);
    await registrationPage.enterPassword(registration.password);
    await registrationPage.enterConfirmPassword(registration.password);
    await registrationPage.clickRegister();
    await registrationPage.registerCompletedMessage();
  });

  test("Login Test_02", async ({ page, loginPage }) => {
    await page.goto(login.url);
    await loginPage.navigateToLoginPage();
    await loginPage.verifyPageTitle();
    await loginPage.login(login.email, login.password);
  
    console.log("Login successful with email:", login.email);
  });  
  
  test("Add to Cart Test_03", async ({ page, loginPage, homePage, books }) => {
    await page.goto(testData.url);
    await loginPage.navigateToLoginPage();
    await loginPage.login(login.email, login.password);
    await books.clearCart();
    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
    await books.verifyBillingAddressPage();
    console.log("Add to Cart and Checkout process verified successfully.");
  });

  test("Checkout Test Case 04", async ({ page, loginPage, homePage, books, checkout }) => {
    await page.goto(testData.url);

    
    await loginPage.navigateToLoginPage();
    await loginPage.login(login.email, login.password);

    
    await books.clearCart();
    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);

    
    await checkout.fillBillingDetails(testData.billingDetails);
    await checkout.completeCheckoutSteps();
    await checkout.verifyOrderSuccess();
    await checkout.viewOrderDetails();

    console.log("Checkout process completed and verified successfully.");
  });

  
});
