import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class TableElementsUtil {
  constructor(private page: Page) { }


  async checkHomePageTitle(title: string) {
    const pageTitle = await this.page.title();
    expect(pageTitle).toBe(title);
  }

  async checkPage(indicator: string) {
    const pageIndicator = await this.page.getByText(indicator);
    expect(pageIndicator).toBeVisible();
  }

  async checkUserAdded(fields: Record<string, string | number>) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const selector = await this.page.getByTestId(fieldName);
      expect(selector).toBeVisible();
    }
  }

  async checkUserUpdated(fields: Record<string, string | number>) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const selector = await this.page.getByTestId(fieldName);
      expect(selector).toBeVisible();
    }
  }
}