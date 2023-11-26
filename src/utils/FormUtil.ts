import { Page } from 'playwright';

export class FormUtil {
  constructor(private page: Page) {}

  async fillForm(fields: Record<string, string | number>) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const selector = this.page.getByTestId(fieldName);
      await selector.fill(value.toString());
    }
  }

  async updateForm(fields: Record<string, string | number>) {
    for (const [fieldName, value] of Object.entries(fields)) {
      const selector = this.page.getByTestId(fieldName);
      await selector.fill(value.toString());
    }
  }

  async clickSubmitButton(buttonSelector: string) {
    await this.page.getByRole('button', { name: buttonSelector }).click();
  }
}