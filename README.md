# Nop-Station E-Commerce Automation Testing




### Project Overview  
This project automates end-to-end testing of a web application using Playwright and the Page Object Model (POM). It ensures scalable, reusable, and maintainable test scripts, focusing on automating interactions with the **Home**, **Register**, **Login**, **Books**, and **Checkout** pages. Each page is modeled as a dedicated Page Object, enabling streamlined validation of the application’s functionality.





### Playwright and Page Object Model (POM)  

**Playwright** is a versatile automation framework for browser tasks, enabling actions like navigation, form handling, and UI interaction. It supports cross-browser and cross-platform testing, making it ideal for validating real-world user scenarios and ensuring compatibility across environments.  

The **Page Object Model (POM)** is a testing design pattern that simplifies automation by representing web pages as dedicated classes. Each class encapsulates actions for its respective page, such as form submission or element verification, reducing code repetition. POM enhances test modularity, reusability, and maintainability, streamlining the automation process.  


## **Purpose of This Project**

- **Page Classes**:  
  - **HomePage**: Verifies elements like banners and handles navigation.  
  - **RegisterPage**: Automates user registration and form submission.  
  - **LoginPage**: Manages login actions and verification.  
  - **BooksPage**: Handles product interactions, including cart management.  
  - **CheckoutPage**: Automates billing, shipping, and order completion.  

- **Locator Class**:  
  - Centralizes element locators for easier updates and consistency.  


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

2.  
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
- ## Test Results
  
#### RegistrationPage
  
![Image](https://github.com/user-attachments/assets/b1004233-9ce0-4c4b-971c-06e8c17bda2f)

#### After logIn 
   
![Image](https://github.com/user-attachments/assets/c6c5b3d5-fdba-468e-9452-4615a90614b9)

#### After adding prodruct into Cart 

  ![Image](https://github.com/user-attachments/assets/8a344975-01b0-4a0b-bcaf-f2433445e2cb)

#### After completing Checkout proccess fully
![Image](https://github.com/user-attachments/assets/df38a89e-39f4-426f-b597-cc83fd63987f)

#### Allure Report


