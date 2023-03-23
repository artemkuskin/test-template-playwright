// import { test, expect } from "@playwright/test";

// test.afterEach(async ({ page }, testInfo) => {
//   if (testInfo.status !== testInfo.expectedStatus) {
//     // Get a unique place for the screenshot.
//     const screenshotPath = testInfo.outputPath(`failure.png`);
//     // Add it to the report.
//     testInfo.attachments.push({ name: "screenshot", path: screenshotPath, contentType: "image/png" });
//     // Take the screenshot itself.
//     await page.screenshot({ path: screenshotPath, timeout: 5000 });
//   }
// });

// test("test login", async ({ page }) => {
//   const baseUrl = process.env.BASE_URL;
//   const linkToLoginForm = page.getByRole("link", { name: "Sign in" });
//   const loginInput = page.locator("#login_field");
//   const passwordInput = page.locator("#password");
//   const loginButton = page.getByRole("button", { name: "Sign in" });
//   const password = process.env.PASSWORD;
//   const email = process.env.EMAIL;

//   await page.goto(`${baseUrl}`);

//   await linkToLoginForm.click();

//   await expect(page).toHaveURL(`${baseUrl}/login`);

//   await loginInput.fill(`${email}`);

//   await passwordInput.fill(`${password}`);

//   await loginButton.click();
// });
