import { Page } from 'playwright';
import { NavigationUtil } from '../utils/NavigationUtil';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class ToolTipPage {
  private pageUtils: PageUtils;
  private specialElementsUtil: SpecialElementsUtil;
  private navigationUtil: NavigationUtil;

  constructor(private page: Page) {

    this.pageUtils = new PageUtils(page);
    this.specialElementsUtil = new SpecialElementsUtil(page);
    this.navigationUtil = new NavigationUtil(page);
  }


  async checkToolTipPage() {
    await this.pageUtils.checkPage("Tool Tip");
  }

  async hoverElement(element: string) {
    await this.specialElementsUtil.hoverOverElement(element);

  }

  async verifyToolTip(element: string) {
    await this.specialElementsUtil.hoverOverElement(element);

  }

}

