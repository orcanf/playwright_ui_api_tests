import { Page } from 'playwright';

export class NavigationUtil {
  constructor(private page: Page) {}

  async navigateToDesiredSubPage(subPageName: string) {
    await this.page.click(`//div/h5[text()='${subPageName}']`);
  }

  async navigateToDesiredSubMenu(subMenuName: string) {
    await this.page.click(`//ul/li/span[text()='${subMenuName}']`);
  }

  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }
}