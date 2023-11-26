import { Page } from 'playwright';
import { PageUtils } from '../utils/PageUtils';
import { SpecialElementsUtil } from '../utils/SpecialElementsUtil';

export class DroppablePage {
    private pageUtils: PageUtils;
    private specialElementsUtil: SpecialElementsUtil;

    constructor(private page: Page) {
      this.pageUtils = new PageUtils(page);
      this.specialElementsUtil = new SpecialElementsUtil(page);
    }
  

    async checkDroppablePage() {
        await this.pageUtils.checkPage("Droppable");
      }

    async dragAndDrop(dragLocator: string, dropLocator: string) {
        await this.specialElementsUtil.dragDropElement(dragLocator, dropLocator);
      }
    
      async verifyDragAndDrop(element: string) {
        await this.specialElementsUtil.verifyDragDrop();
        
      }
    
    
    
}