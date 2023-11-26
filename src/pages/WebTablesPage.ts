import { Page } from 'playwright';
import { PageUtils } from '../utils/PageUtils';
import { TableElementsUtil } from '../utils/TableElementsUtil';

export class WebTablesPage {
  private pageUtils: PageUtils;
  private tableElementsUtil: TableElementsUtil;

  constructor(private page: Page) {
    this.pageUtils = new PageUtils(page);
    this.tableElementsUtil = new TableElementsUtil(page);
  }

  async clickAddButton() {
    await this.page.click('#addNewRecordButton');
  }

  async clickEditButton() {
    await this.page.click('#edit-record-2');
  }

  async checkWebTablesPage() {
    await this.pageUtils.checkPage("Add");
  }

  async checkUserAdded(fields: Record<string, string | number>) {
    await this.tableElementsUtil.checkUserAdded(fields);
  }

  async checkUserUpdated(fields: Record<string, string | number>) {
    await this.tableElementsUtil.checkUserUpdated(fields);
  }
}