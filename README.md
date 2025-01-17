# Nop-Station E-Commerce Automation Testing




## Overview
--------------------------------
The project is designed to automate end-to-end testing of a web application using Playwright and the Page Object Model (POM). It is structured to ensure reusability, maintainability, and scala-bility of tests, focusing on autom-ating user interactions with the **Home**, **Register**, **Login**, **Books**, and **Checkout** pages. Each page's behavior is represented by a separate Page Object, and tests are written to interact with these objects and validate the application’s functionality.

- 


## Playwright and Page Object Model (POM)

**Paywright** is a powerful tool used for automating browser tasks like navi-gation, form submission, and UI element interaction. It allows the execution of end-to-end tests that simulate how real users interact with web applications. These tests can be executed across different browsers and platforms, which makes it ideal for ensuring cross-browser compatibility.

The **Page Object Model (POM)** is a design pattern used in automated testing to create an abstraction layer for web pages. Instead of writing repetitive code to interact with the same web elements in multiple tests, POM allows testers to create separate classes that represent each page. Each class encapsulates the actions that can be performed on that page, such as filling out forms, clicking buttons, or verifying elements. This promotes code reusability, modularity, and easier maintenance.

##  **Purpose of This Project :**
-   **Page Classes**:
    
    -   **HomePage**: Defines actions related to the home page, such as verifying page elements (e.g., banners, categories) and interacting with navigation items.
    -   **RegisterPage**: Automates actions related to the user registration form, such as entering details (first name, last name, email, etc.), and submitting the form.
    -   **LoginPage**: Automates actions for logging in, including entering credentials, clicking the login button, and verifying successful login.
    -   **BooksPage**: Automates interactions with books/products, including adding products to the cart, updating quantities, and verifying cart contents.
    -   **CheckoutPage**: Automates the checkout process, including entering billing information, selecting shipping methods, and completing the order.
-   **Locator Class**:
    
    -   Stores all the locators (selectors) for the elements on the page, providing an easy way to access and modify selectors across the repository. This helps in maintaining consistency and minimizing selector duplication.

## Testing Process Structure
### 1. **Test Setup and Configuration**

-   **Install Dependencies**:
    
    -   Install Playwright and other necessary dependencies by running:
   `npm install`

![Image](https://github.com/user-attachments/assets/e3f17ab4-aaa5-427c-9575-c956928f2ffd)
        
-   **Run Tests**:
    
    -   To run all the tests using Playwright’s test runner:
    `npx playwright test`

![Image](https://github.com/user-attachments/assets/e459594c-f3f7-494d-81f9-6c4430969133)

    -   To run tests in a specific browser (Chromium, Firefox, WebKit), you can use:
`npx playwright test --project=chromium` 
        
-   **Running a Specific Test**:
    
    -   To run a specific test file, use the following command:
   `npx playwright test path/to/testFile.spec.ts` 
        
-   **View Test Results**:
    
    -   Playwright provides detailed logs and reports after test execution. You can analyze the results directly in the terminal or configure Playwright to output reports in various formats (e.g., HTML, JSON).
      ![Image](https://github.com/user-attachments/assets/7070cc1a-495e-47e2-9f80-dc00df6c95d4)
-   **Configure Playwright**:
    
    -   The configuration for Playwright is set up to run tests in different browsers (Chromium, Firefox, WebKit). You can also specify parallelism and other settings (e.g., test retries, timeouts) in the `playwright.config.ts` file.

```typescript
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
 
const capabilities = {
  browserName: "Chrome",
  browserVersion: "Latest",
  "LT:Options": {
      platform: "Windows 10",
      build: "Playwright Test from config",
      name: "Playwright Test -1",
      user: 'inowreenb1525',
      accessKey: '42sVE40zbIIggC9ANJBiMyPvyZcdQVfcguuPJzVkbcv1PD7iO7',
      network: true,
      video: true,
      console: true,
      tunnel: false,
      tunnelName: "",
      geoLocation: '',
  },
};  

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000 * 5, 

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], // Ensure correct casing
      },
    },
  ],

  testMatch: ["test/checkoutPages.test.ts"], // Verify path

  use: {
    headless: false,
    screenshot: "on", 
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },

  retries: 0, 

  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReporters/jsonReport.json" }],
    ["html", { open: "always" }],
  ],
};

export default config;
```

##  **Test Case Development and Execution**

#### **Steps for Writing Tests:**

1.  **Setup Test Data**:
    
    -   In the `testData.ts` file, store test data such as user credentials (email, password), product details (book names, quantities), and address information (for the checkout process). This allows for easy updates to data without having to modify individual tests.
      ![Image](https://github.com/user-attachments/assets/1bc13c7f-fea6-4250-b72a-8e69ea82dfa5)

2.  **Test File Structure**:
    
    -   Each test file corresponds to a specific page or a group of related actions:
        -   **HomePage.test.ts**: Tests related to the Home page.
        -   **RegisterPage.test.ts**: Tests related to user registration. A user can create an account by filling out a registration form with their details (first name, last name, email, etc.).
            -   ***Test Scenario***:
                - Open the registration page.
                -   Fill out the registration form.
                -   Submit the form.
                -   Verify that the registration is successful.
        -   **LoginPage.test.ts**: Tests for login functionality. A registered user can log in using their email and password.
               -   ***Test Scenario***:
                    -   Navigate to the login page.
                    -   Enter the credentials.
                    -   Click on the login button.
                   -   Verify the user is logged in successfully by checking for a welcome message.
        -   **BooksPage.test.ts**: Tests for adding items to the cart, managing cart contents, etc.  A user can add one or more books to their shopping cart.
               -   **Test Scenario**:
                   -   Navigate to the books section.
                   -   Add products to the cart.
                   -   Verify the cart contents.
                   -   Update the quantity of the product.
        -   **CheckoutPage.test.ts**: Tests for the checkout process, including form filling and order confirmation.1. A user can proceed with the checkout process to place an order.
            -   **Test Scenario**:
                 -   Navigate to the checkout page.
                -   Fill in the billing address and shipping information.
                -   Select a payment method.
                -   Complete the order.
                -   Verify that the order confirmation message appears.
        
3. **Write Test Scenarios**:

-   Test cases are written in a declarative way using Playwright’s `test()` function. Each test defines the actions that simulate user behavior and assertions that validate expected outcomes.
 4. **Execution Flow :**

-   **Test Execution**:
    
    -   Playwright’s test runner (`npx playwright test`) executes the test cases sequentially or in parallel (based on configuration).
    -   Playwright will launch the browser, navigate to the specified pages, interact with elements, and perform assertions.
      
      ![Image](https://github.com/user-attachments/assets/0f794b14-ad00-4807-a05a-6eadb23fcffd)
-   **Assertions**:
    -   Playwright provides built-in matchers like `expect(locator).toHaveText()` and `expect(locator).toBeVisible()` to validate the correctness of the application.
    -   Assertions are used to confirm that the page state is correct after performing actions (e.g., successful login, item added to cart).
-   **Reporting**:
    
    -   After test execution, Playwright outputs detailed reports in the terminal. You can also configure Playwright to generate reports in different formats (e.g., HTML or JSON) for better analysis of test results.

![Image](https://github.com/user-attachments/assets/1a536a59-c72c-4eac-8fbf-cdc4b1550894)


## Test Execution Flowchart



```plaintext
  +---------------------+
  | Setup and Install   |
  +---------------------+
             |
             v
  +---------------------+
  | Configure Playwright|
  +---------------------+
             |
             v
  +---------------------+
  | Define Page Objects |
  +---------------------+
             |
             v
  +---------------------+
  | Write Test Cases     |
  +---------------------+
             |
             v
  +---------------------+
  | Run Test Cases       |
  +---------------------+
             |
             v
  +---------------------+
  | Verify Results       |
  +---------------------+
             |
             v
  +---------------------+
  | Clean Up/Handle Errors |
  +---------------------+

```

## **Additional Considerations**

-   **Parallel Test Execution**:
    -   Playwright supports parallel execution of tests, allowing faster test runs. You can configure this in `playwright.config.ts` under the `projects` setting.
   **Playwright Test Configuration**

```javascript
projects: [
    {
        name: 'firefox',
        testMatch: /.*\.test\.ts/,
        retries: 2,
        reporter: 'dot',
    },
]
```

-   **Cross-Browser Testing**:
    -   Playwright allows you to run tests on different browsers (Chromium, Firefox, WebKit), which is useful for ensuring compatibility across various browser engines.
    ##### Playwright Test Usage for Firefox

```javascript
test.use({ browserName: 'firefox' });

```
**Test Results**
![Image](https://github.com/user-attachments/assets/b1004233-9ce0-4c4b-971c-06e8c17bda2f)

![Image](https://github.com/user-attachments/assets/c6c5b3d5-fdba-468e-9452-4615a90614b9)

![Image](https://github.com/user-attachments/assets/8a344975-01b0-4a0b-bcaf-f2433445e2cb)

![Image](https://github.com/user-attachments/assets/df38a89e-39f4-426f-b597-cc83fd63987f)
