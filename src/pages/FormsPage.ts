import { Page } from 'playwright';
import { FormUtil } from '../utils/FormUtil';
import { NavigationUtil } from '../utils/NavigationUtil';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class FormsPage {
    private navigationUtil: NavigationUtil;
    private pageUtils: PageUtils;
    private formUtil: FormUtil; 
    private specialElementsUtil: SpecialElementsUtil;

    constructor(private page: Page) {
      this.navigationUtil = new NavigationUtil(page);
      this.pageUtils = new PageUtils(page);
      this.formUtil = new FormUtil(page);
      this.specialElementsUtil = new SpecialElementsUtil(page);
    }
  
    async navigateToSubMenu(elementName: string) {
        await this.navigationUtil.navigateToDesiredSubMenu(elementName);
      }

    async checkFormsPage() {
        await this.pageUtils.checkPage("Practice Form");
      }

    async fillPracticeForm(fields: Record<string, string | number>) {
        await this.formUtil.fillForm(fields);
      }

      async makeGenderSelection(gender: string) {
        await this.specialElementsUtil.selectRadioButton(gender);
      }

      async makeHobbySelection(hobby) {
        await this.specialElementsUtil.selectCheckBox(hobby);
      }

      async uploadProfilePicture() {
        await this.specialElementsUtil.uploadFile();
      }

      async setBirthDate() {
        await this.specialElementsUtil.selectDate('15','September','1992');
      }

      async setStateAndCity() {
        await this.specialElementsUtil.selectStateAndCity('Haryana','Karnal');
      }

      async submitForm() {
        await this.formUtil.clickSubmitButton('Submit');
      }


}