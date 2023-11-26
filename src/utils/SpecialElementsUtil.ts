import { Page } from 'playwright';
import { expect } from '@playwright/test';


const path = require('path');

export class SpecialElementsUtil {
  constructor(private page: Page) {}

  async selectRadioButton(selection: string) {
    await this.page.click(`//label[text() = '${selection}']`);
  
  }

  async selectCheckBox(selection: string) {
    await this.page.click(`//label[text() = '${selection}']`);
  }

  async selectCheckboxes(...selectors) {
    for (const selector of selectors) {
        const checkboxSelector = `//label[text() = '${selector}']`;
        const checkbox = await this.page.$(checkboxSelector);
        
        if (checkbox) {
            await checkbox.check();
        } else {
            console.error(`Checkbox not found for label: ${selector}`);
        }
    }
  }

  async uploadFile() {
    await this.page.getByLabel('Select picture').setInputFiles(path.join(__dirname, 'download.png'));
  }

  async selectDate(day: string, month: string, year: string ) {
    await this.page.getByTestId('dateOfBirthInput').click();
    await this.page.locator('.react-datepicker__month-select').selectOption(month);
    await this.page.locator('.react-datepicker__year-select').selectOption(year);
    await this.page.locator(`//div[text()='${day}']`).click();
  }

  async selectStateAndCity(state: string, city: string) {
    await this.page.locator("//div[text()='Select State']").click();
    await this.page.getByText(state).click();
    await this.page.getByTestId('city').click();
    await this.page.getByText(city).click();
  }

  async startProgressBar() {
    await this.page.getByTestId('startStopButton').click();

  }

  async hoverOverElement(element) {
    await this.page.getByText(element).hover();

  }

  async dragDropElement(dragLocator, dropLocator) {
    await this.page.locator(dragLocator).dragTo(this.page.locator(dropLocator).first());
  }

  async verifyDragDrop() {
    const dropSuccessIndicator = await this.page.locator('#droppable').first().textContent();  
    expect(dropSuccessIndicator).toBe('Dropped!');
  }

  async verifyToolTip(element) {
    const toolTipText = await this.page.getByText('You hovered over the Button').textContent();  
    expect(toolTipText).toBe('You hovered over the Button');
  }

  async waitProgressBar() {
    await this.page.waitForSelector('#progressBar [aria-valuenow="100"]', { timeout: 30000 });
    const progressBarValue = await this.page.getAttribute('#progressBar', 'aria-valuenow');
    expect(progressBarValue).toBe('100');
    const buttonText = await this.page.textContent('#startStopButton');
    expect(buttonText).toBe('Reset');
  }

  async verifyImage() {
    await this.page.waitForLoadState('domcontentloaded');
    const images = await this.page.locator('img');
    const allImages = await images.all();
    for await (const img of allImages){
        const imgSrc = await img.getAttribute("src");
        //@ts-ignore
        if(imgSrc?.length > 1) {
            const response = await this.page.request.get("https://demoqa.com/" + imgSrc);
            console.log(response.status())
            expect.soft(response.status(), "Failed to load: " + imgSrc).toBe(200);
        }
    }
  }
}