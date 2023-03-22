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

test("test links", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);
  await page.getByRole("button", { name: "Product" }).hover();
  await page.getByRole("link", { name: "Actions Automate any workflow" }).click();
  await page.screenshot({ path: "img/link.jpg" });
});
