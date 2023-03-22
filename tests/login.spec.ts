import { test, expect } from "@playwright/test";

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    // Get a unique place for the screenshot.
    const screenshotPath = testInfo.outputPath(`failure.png`);
    // Add it to the report.
    testInfo.attachments.push({ name: "screenshot", path: screenshotPath, contentType: "image/png" });
    // Take the screenshot itself.
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
});

test("test login", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  const linkToLoginForm = page.getByRole("link", { name: "Sign in" });
  const loginInput = page.locator("#login_field");
  const passwordInput = page.locator("#password");
  const loginButton = page.getByRole("button", { name: "Sign in" });

  await linkToLoginForm.click();

  await expect(page).toHaveURL(`${process.env.BASE_URL}/login`);

  await loginInput.fill(`${process.env.EMAIL}`);

  await passwordInput.fill(`${process.env.PASSWORD}`);

  await loginButton.click();

  await page.screenshot({ path: "img/login.jpg" });
});
