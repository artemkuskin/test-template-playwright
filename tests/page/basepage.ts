import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(readonly page: Page) {}

  protected async navigateTo(path?: string): Promise<void> {
    if (path) await this.page.goto(path);
    else await this.page.goto("/");
  }
}
