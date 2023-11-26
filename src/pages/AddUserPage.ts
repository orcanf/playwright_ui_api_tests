import { Page } from 'playwright';
import { FormUtil } from '../utils/FormUtil';
import { PageUtils } from '../utils/PageUtils';

export class AddUserPage {
  private formUtil: FormUtil;
  private pageUtils: PageUtils;

  constructor(private page: Page) {
    this.formUtil = new FormUtil(page);
    this.pageUtils = new PageUtils(page);
  }

  async addUser(fields: Record<string, string | number>) {
    await this.formUtil.fillForm(fields);
    await this.formUtil.clickSubmitButton('Submit');
  }

  async checkAddUserPage() {
    await this.pageUtils.checkPage("Registration Form");
  }
}