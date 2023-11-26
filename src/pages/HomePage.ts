import { Page } from 'playwright';
import { NavigationUtil } from '../utils/NavigationUtil';
import { PageUtils } from '../utils/PageUtils';

export class HomePage {
  private navigationUtil: NavigationUtil;
  private pageUtils: PageUtils;

  constructor(private page: Page) {
    this.navigationUtil = new NavigationUtil(page);
    this.pageUtils = new PageUtils(page);
  }

  async navigateToHomePage(url: string) {
    await this.navigationUtil.navigateToUrl(url);
  }

  async navigateToSubPage(elementName: string) {
    await this.navigationUtil.navigateToDesiredSubPage(elementName);
  }

  async checkHomePageOpened() {
    await this.pageUtils.checkHomePageTitle('DEMOQA');
  }

}