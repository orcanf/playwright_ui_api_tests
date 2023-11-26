import { Page } from 'playwright';
import { NavigationUtil } from '../utils/NavigationUtil';
import { PageUtils } from '../utils/PageUtils';

export class ElementsPage {
  private navigationUtil: NavigationUtil;
  private pageUtils: PageUtils;

  constructor(private page: Page) {
    this.navigationUtil = new NavigationUtil(page);
    this.pageUtils = new PageUtils(page);
  }

  async navigateToSubMenu(elementName: string) {
    await this.navigationUtil.navigateToDesiredSubMenu(elementName);
  }

  async checkElementsPage() {
    await this.pageUtils.checkPage("Web Tables");
  }
}