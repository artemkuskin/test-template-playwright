import { BasePage } from "../page/basepage";
import { HomePage } from "../page/homepage";
import { LoginPage } from "../page/loginpage";
import { test } from "@playwright/test";

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({ name: "screenshot", path: screenshotPath, contentType: "image/png" });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
});

test.describe("Login page", () => {
  let loginPage: LoginPage;
  test("should be able to log in", async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
    await loginPage.fillForm();
    await loginPage.submitForm();
    await page.screenshot({ path: "img/login.jpg" });
  });
});
