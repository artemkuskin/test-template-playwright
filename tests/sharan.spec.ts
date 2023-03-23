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

// test("sharan", async ({ page }) => {
//   await page.goto("https://www.sharanmedical.co.il/");
//   await page.locator("#content").getByRole("combobox").selectOption("הזמנת רופא/ה או אח/ות הביתה");
//   await page
//     .locator("#content div")
//     .filter({ hasText: "נושא פנייה:זימון תור – מעבדה עד הביתאשפוז ביתהוספיס ביתאשפוז בית פסיכיאטריטיפול " })
//     .nth(3)
//     .click();
//   await page.locator("#content").getByPlaceholder("מייל:").click();
//   await page.locator("#content").getByPlaceholder("מייל:").fill("fdasfsafasfsad");
//   await page.locator("#content").getByPlaceholder("טלפון:").dblclick();
// });
