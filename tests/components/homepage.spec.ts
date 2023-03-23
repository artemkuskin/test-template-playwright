import { test } from "@playwright/test";
import { HomePage } from "../page/homepage";

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({ name: "screenshot", path: screenshotPath, contentType: "image/png" });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
});

test.describe("Home page tests", () => {
  let homePage: HomePage;

  test("should be on home page", async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateTo();
    await homePage.navigateToLogin();
    await homePage.load();
    await page.screenshot({ path: "img/home.jpg" });
  });
});
