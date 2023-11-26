import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class PageUtils {
  constructor(private page: Page) { }


  async checkHomePageTitle(title: string) {
    const pageTitle = await this.page.title();
    expect(pageTitle).toBe(title);
  }

  async checkPage(indicator: string) {
    const count = await this.page.getByText(indicator).count();
    let pageIndicator;
    if (count > 1) {
      pageIndicator = await this.page.getByText(indicator).first();
      expect(pageIndicator).toBeVisible();
    } else {
      pageIndicator = await this.page.getByText(indicator);
      expect(pageIndicator).toBeVisible();
    }


  }
}