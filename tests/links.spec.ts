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

// test("test links", async ({ page }) => {
//   const baseUrl = process.env.BASE_URL;
//   const productButton = page.getByRole("button", { name: "Product" });
//   const actionsButton = page.getByRole("link", { name: "Actions Automate any workflow" });
//   const packagesButton = page.getByRole("link", { name: "Packages Host and manage packages" });
//   const securityButton = page.getByRole("link", { name: "Security Find and fix vulnerabilities" });
//   const codespacesButton = page.getByRole("link", { name: "Codespaces Instant dev environments" });
//   const copilotButton = page.getByRole("link", { name: "Copilot Write better code with AI" });
//   const codeReviewButton = page.getByRole("link", { name: "Code review  Manage code changes" });
//   const issuesButton = page.getByRole("link", { name: "Issues  Plan and track work" });
//   const discussionsButton = page.getByRole("link", { name: "Discussions  Collaborate outside of code" });

//   await page.goto(`${baseUrl}`);

//   await productButton.hover();
//   await actionsButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/actions`);

//   await productButton.hover();
//   await packagesButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/packages`);

//   await productButton.hover();
//   await securityButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/security`);

//   await productButton.hover();
//   await codespacesButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/codespaces`);

//   await productButton.hover();
//   await copilotButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/copilot`);

//   await productButton.hover();
//   await codeReviewButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/code-review`);

//   await productButton.hover();
//   await issuesButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/issues`);

//   await productButton.hover();
//   await discussionsButton.click();
//   await expect(page).toHaveURL(`${baseUrl}/features/discussions`);
// });
