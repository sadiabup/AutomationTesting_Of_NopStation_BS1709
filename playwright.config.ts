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
 