import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class LoginPage extends BasePage {
  readonly expect: LoginPageAssertions;
  readonly _usernameFieldLocator: Locator;
  readonly _passwordFieldLocator: Locator;
  readonly _submitButtonFieldLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.expect = new LoginPageAssertions(this);
    this._usernameFieldLocator = this.page.locator("#login_field");
    this._passwordFieldLocator = this.page.locator("#password");
    this._submitButtonFieldLocator = this.page.getByRole("button", { name: "Sign in" });
  }

  override async navigateTo(): Promise<void> {
    await super.navigateTo(`${process.env.BASE_URL}/login`);
  }

  async submitForm(): Promise<void> {
    await this._submitButtonFieldLocator.click();
  }

  async fillForm(): Promise<void> {
    await this._usernameFieldLocator.fill(`${process.env.EMAIL}`);
    await this._passwordFieldLocator.fill(`${process.env.PASSWORD}`);
  }

  async setUsername(data: string): Promise<void> {
    await this._usernameFieldLocator.fill(data);
  }

  async setPassword(data: string): Promise<void> {
    await this._passwordFieldLocator.fill(data);
  }
}

class LoginPageAssertions {
  constructor(readonly formPage: LoginPage) {}

  async toHaveDisabledSubmitButton(): Promise<void> {
    await expect(this.formPage._submitButtonFieldLocator).not.toBeEnabled();
  }
}
