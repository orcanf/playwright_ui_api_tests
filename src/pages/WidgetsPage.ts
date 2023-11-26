import { Page } from 'playwright';
import { FormUtil } from '../utils/FormUtil';
import { NavigationUtil } from '../utils/NavigationUtil';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class WidgetsPage {
    private pageUtils: PageUtils;
    private specialElementsUtil: SpecialElementsUtil;
    private navigationUtil: NavigationUtil;

    constructor(private page: Page) {

      this.pageUtils = new PageUtils(page);
      this.specialElementsUtil = new SpecialElementsUtil(page);
      this.navigationUtil = new NavigationUtil(page);
    }
  

    async checkWidgetsPage() {
        await this.pageUtils.checkPage("Widgets");
      }
    
      async startProgressBar() {
        await this.specialElementsUtil.startProgressBar();
      }

      async navigateToSubMenu(elementName: string) {
        await this.navigationUtil.navigateToDesiredSubMenu(elementName);
      }

}