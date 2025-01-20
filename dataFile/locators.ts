// locators.ts
export const registerLocators = {
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
export const loginLocators = {
  emailInput: "//input[@name='Email']",
  passwordInput: "//input[@type='password' and @id='Password']",
  rememberMeCheckbox: "//input[@type='checkbox' and @name='RememberMe']",
  loginButton: "//button[@type= 'submit' and @class= 'button-1 login-button']",
  loginLink: "//a[@class='ico-login' and text()='Log in']",
  pageTitle: "//div[@class='page-title']",
};

export const booksLocators = {
  cartIcon: "//a[@class='ico-cart']",
  emptyCartMessage: "//span[@class='cart-qty' and text()='(0)']",
  removeButton: "//button[@name='updatecart' and @class='remove-btn']",
  addToCartButton: "//button[contains(text(), 'Add to cart')]",
  popupMessage: "//p[contains(text(), 'The product has been added to your')]",
  closeButton: "//span[@class='close' and @title='Close']",
  termsCheckbox: "//input[@type='checkbox' and @name='termsofservice']",
  checkoutButton: "//button[@type='submit' and @name='checkout']",
  productRow: (productName: string) => `//tr[contains(., '${productName}')]`,
  quantityInput: "//input[contains(@name, 'itemquantity') and contains(@class, 'qty-input')]",
  updateCartButton: "//button[@type='submit' and @name='updatecart']",
  billingAddressMessage: "//h1[text()='Billing address']",
};

export const checkoutLocators = {
  firstName: "//input[@type='text' and @name='BillingNewAddress.FirstName']",
  lastName: "//input[@name='BillingNewAddress.LastName']",
  email: "//input[@name='BillingNewAddress.Email']",
  company: "//input[@name='BillingNewAddress.Company']",
  country: "//select[@name='BillingNewAddress.CountryId']",
  state: "//select[@name='BillingNewAddress.StateProvinceId']",
  city: "//input[@name='BillingNewAddress.City']",
  address1: "//input[@name='BillingNewAddress.Address1']",
  address2: "//input[@name='BillingNewAddress.Address2']",
  zip: "//input[@name='BillingNewAddress.ZipPostalCode']",
  phone: "//input[@name='BillingNewAddress.PhoneNumber']",
  fax: "//input[@name='BillingNewAddress.FaxNumber']",
  nextButton: "//button[@type='submit' and @id='billingaddress-next-button']",
  shippingMethod: "//input[@type='radio' and @value='Ground___Shipping.FixedByWeightByTotal']",
  shippingNextButton: "//button[@class='button-1 shipping-method-next-step-button']",
  paymentMethod: "//input[@type='radio' and @value='Payments.CheckMoneyOrder']",
  paymentNextButton: "//button[@class='button-1 payment-method-next-step-button']",
  paymentInfoNextButton: "//button[@class='button-1 payment-info-next-step-button']",
  confirmOrderButton: "//button[@class='button-1 confirm-order-next-step-button']",
  thankYouMessage: "//h1[contains(text(), 'Thank you')]",
  orderProcessedMessage: "//strong[contains(text(), 'Your order has been successfully processed!')]",
  orderDetailsLink: "//a[contains(text(), 'Click here for order details.')]",
};