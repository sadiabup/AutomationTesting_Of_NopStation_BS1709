export const locators = {
    // ** Login Page Locators **
    login: {
        loginLink: "//a[contains(text(), 'Log in')]",
        emailInput: "//input[@id='Email']",
        passwordInput: "//input[@id='Password']",
        loginButton: "//button[contains(text(), 'Log in')]",
        pageTitle: "//div[@class='page-title']",
    },

    // ** Registration Page Locators **
    register: {
        registerLink: "//a[contains(text(), 'Register')]",
        firstNameInput: "//input[@id='FirstName']",
        lastNameInput: "//input[@id='LastName']",
        emailInput: "//input[@id='Email']",
        companyInput: "//input[@id='Company']",
        passwordInput: "//input[@id='Password']",
        confirmPasswordInput: "//input[@id='ConfirmPassword']",
        registerButton: "//button[@id='register-button']",
        registrationSuccessMessage: "//div[contains(text(), 'Your registration completed')]",
    },

    // ** Home Page Locators **
    home: {
        booksCategory: "//a[contains(text(), 'Books')]",
        jewelryCategory: "//a[contains(text(), 'Jewelry')]",
    },

    // ** Books Page Locators **
    books: {
        firstProductAddButton: "//div[@class='product-item'][1]//button[contains(text(), 'Add to cart')]",
        secondProductAddButton: "//div[@class='product-item'][2]//button[contains(text(), 'Add to cart')]",
        cartQuantityInput: "//td[contains(text(), 'PRODUCT_NAME')]//following-sibling::td//input[@class='qty-input']",
        updateCartButton: "//button[@name='updatecart']",
        clearCartButton: "//button[contains(text(), 'Clear cart')]",
    },

    // ** Checkout Page Locators **
    checkout: {
        firstNameInput: "//input[@type='text' and @name='BillingNewAddress.FirstName']",
        lastNameInput: "//input[@name='BillingNewAddress.LastName']",
        emailInput: "//input[@name='BillingNewAddress.Email']",
        companyInput: "//input[@name='BillingNewAddress.Company']",
        countryInput: "//select[@name='BillingNewAddress.CountryId']",
        stateInput: "//select[@name='BillingNewAddress.StateProvinceId']",
        cityInput: "//input[@name='BillingNewAddress.City']",
        address1Input: "//input[@name='BillingNewAddress.Address1']",
        address2Input: "//input[@name='BillingNewAddress.Address2']",
        zipInput: "//input[@name='BillingNewAddress.ZipPostalCode']",
        phoneInput: "//input[@name='BillingNewAddress.PhoneNumber']",
        faxInput: "//input[@name='BillingNewAddress.FaxNumber']",
        nextButton: "//button[@type='submit' and @id='billingaddress-next-button']",
        shippingMethodRadio: "//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']",
        shippingNextButton: "//button[@type='submit' and @class= 'button-1 shipping-method-next-step-button']",
        paymentMethodRadio: "//input[@type='radio' and @value='Payments.CheckMoneyOrder' and @id='paymentmethod_4']",
        paymentNextButton: "//button[@type='submit' and @class='button-1 payment-method-next-step-button']",
        paymentInfoNextButton: "//button[@type='submit' and @class='button-1 payment-info-next-step-button']",
        confirmOrderButton: "//button[@type='submit' and @class='button-1 confirm-order-next-step-button']",
        thankYouMessage: "//h1[contains(text(), 'Thank you')]",
        orderProcessedMessage: "//strong[contains(text(), 'Your order has been successfully processed!')]",
        orderDetailsLink: "//a[contains(text(), 'Click here for order details.')]",
    }
};
