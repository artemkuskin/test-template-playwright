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

test("test search", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);

  const searchInput = page.getByPlaceholder("Search GitHub");
  const searchButton = page.locator("#jump-to-results");
  const usersButton = page.getByRole("link", { name: "Users" });

  await searchInput.fill("artemkuskin");

  await searchInput.focus();

  await searchButton.click();

  await usersButton.click();
});
