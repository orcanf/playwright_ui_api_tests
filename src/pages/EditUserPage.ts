import { Page } from 'playwright';
import { FormUtil } from '../utils/FormUtil';
import { PageUtils } from '../utils/PageUtils';

export class EditUserPage {
  private formUtil: FormUtil;
  private pageUtils: PageUtils;

  constructor(private page: Page) {
    this.formUtil = new FormUtil(page);
    this.pageUtils = new PageUtils(page);
  }

  async editUser(fields: Record<string, string | number>) {
    await this.formUtil.updateForm(fields);
    await this.formUtil.clickSubmitButton('Submit');
  }

  async checkUpdateUserPage() {
    await this.pageUtils.checkPage("Registration Form");
  }
}