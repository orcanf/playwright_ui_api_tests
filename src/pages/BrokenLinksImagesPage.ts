import { Page } from 'playwright';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class BrokenLinksImagesPage {
  private pageUtils: PageUtils;
  private specialElementsUtil: SpecialElementsUtil;

  constructor(private page: Page) {
    this.pageUtils = new PageUtils(page);
    this.specialElementsUtil = new SpecialElementsUtil(page);
  }


  async checkBrokenLinksImagesPage() {
    await this.pageUtils.checkPage("Broken Links - Images");
  }

  async verifyBrokenImage() {
    await this.specialElementsUtil.verifyImage();
  }

}