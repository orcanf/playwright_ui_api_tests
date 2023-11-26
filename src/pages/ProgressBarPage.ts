import { Page } from 'playwright';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class ProgressBarPage {
    private pageUtils: PageUtils;
    private specialElementsUtil: SpecialElementsUtil;

    constructor(private page: Page) {
      this.pageUtils = new PageUtils(page);
      this.specialElementsUtil = new SpecialElementsUtil(page);
    }
  

    async checkProgressBarPage() {
        await this.pageUtils.checkPage("Progress Bar");
      }
    
      async startProgressBar() {
        await this.specialElementsUtil.startProgressBar();
      }

      async waitProgressBarFinish() {
        await this.specialElementsUtil.waitProgressBar();
      }

}