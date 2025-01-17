import { expect, test } from "../fixture/testFixture";
const testData = {
  url: "https://test460.nop-station.com/en/",
  email: "sadia111@gmail.com",
  password: "12345678",
  billingDetails: {
      firstName: "Sadia",
      lastName: "Sultana",
      email: "sadia111@gmail.com",
      company: "BS",
      country: "Bangladesh",
      state: "ঢাকা",
      city: "Dhaka",
      address1: "Cantonment",
      address2: "",
      zip: "123",
      phone: "019299999999",
      fax: "",
  },
};


test.describe("Page Object Test Demo", () => {
  test("Register Test_01", async ({ page, registrationPage }) => {
    
    await page.goto(testData.url);
    await registrationPage.register();
    await registrationPage.enterFirstName("Sadia");
    await registrationPage.enterLastName("Sultana");
    await registrationPage.enterEmail(testData.email);
    await registrationPage.enterCompany("BS");
    await registrationPage.enterPassword(testData.password);
    await registrationPage.enterConfirmPassword(testData.password);
    await registrationPage.clickRegister();
    await registrationPage.registerCompletedMessage();
  });

  test("Login Test_02", async ({ page, loginPage }) => {
 
    await page.goto(testData.url);
    await loginPage.navigateToLoginPage();
    await loginPage.verifyPageTitle();
    await loginPage.login(testData.email, testData.password);
    console.log("Login successful with email:", testData.email);
  });

  test("Add to Cart Test_03", async ({ page, loginPage, homePage, books }) => {
    
    await page.goto(testData.url);
    await loginPage.navigateToLoginPage();
    await loginPage.login(testData.email, testData.password);
    await books.clearCart();
    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);
    await books.verifyBillingAddressPage();
  });

  test("Checkout Test Case 04", async ({ page, loginPage, homePage, books, checkout }) => {
    await page.goto(testData.url);
    await loginPage.navigateToLoginPage();
    await loginPage.login(testData.email, testData.password);
    
    await books.clearCart();
    await homePage.clickOnBooks();
    await books.addFirstAndSecondProductsToCart();
    await books.updateQuantityForProduct("Vintage Style Engagement Ring", 3);

    await checkout.fillBillingDetails(testData.billingDetails);
    await checkout.completeCheckoutSteps();
    await checkout.verifyOrderSuccess();
    await checkout.viewOrderDetails();
  })
});
