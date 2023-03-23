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

// test("test", async ({ page }) => {
//   await page.goto("https://github.com/");
//   await page.getByRole("link", { name: "Sign in" }).click();
//   await page.getByLabel("Username or email address").click();
//   await page.getByLabel("Username or email address").fill("arewrw");
//   await page.getByLabel("Username or email address").click();
//   await page.getByLabel("Username or email address").fill("username");
//   await page.getByLabel("Password").click();
//   await page.getByLabel("Password").fill("password");
//   await page.getByRole("button", { name: "Sign in" }).click();
//   await page.getByRole("link", { name: "Homepage" }).click();
//   await page.getByPlaceholder("Email address").click();
//   await page.getByPlaceholder("Email address").fill("usename");
//   await page.getByRole("button", { name: "Sign up for GitHub" }).click();
// });
