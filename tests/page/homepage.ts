import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class HomePage extends BasePage {
  readonly expect: HomePageAssertions;
  readonly _loggedInTextLocator: Locator;
  readonly _submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.expect = new HomePageAssertions(this);
    this._submitButton = this.page.getByRole("link", { name: "Sign in" });
  }

  override async navigateTo(): Promise<void> {
    await super.navigateTo(`${process.env.BASE_URL}`);
  }

  async navigateToLogin(): Promise<void> {
    await this._submitButton.click();
  }
  async load(): Promise<void> {
    await this.expect.toBePage(`${process.env.BASE_URL}/login`);
  }
}

class HomePageAssertions {
  constructor(readonly homePage: HomePage) {}

  async toBePage(path): Promise<void> {
    await expect(this.homePage.page).toHaveURL(path);
  }

  async toBeLoggedIn(): Promise<void> {
    await expect(this.homePage._loggedInTextLocator).toBeVisible();
  }
}
