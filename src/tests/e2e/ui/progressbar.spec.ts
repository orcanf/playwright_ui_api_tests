import { test, expect } from '@playwright/test';
import { AddUserPage } from '../../../pages/AddUserPage';
import { WebTablesPage } from '../../../pages/WebTablesPage';
import { ElementsPage } from '../../../pages/ElementsPage';
import { HomePage } from '../../../pages/HomePage';
import { ProgressBarPage } from '../../../pages/ProgressBarPage';
import { WidgetsPage } from '../../../pages/WidgetsPage';

test('Verify the progress bar', async ({ page }) => {
  const homePage = new HomePage(page);
  const progressBarPage = new ProgressBarPage(page);
  const widgetsPage = new WidgetsPage(page);


  await homePage.navigateToHomePage('https://demoqa.com/');
  await homePage.checkHomePageOpened();
  await homePage.navigateToSubPage('Widgets');
  await progressBarPage.checkProgressBarPage();
  await widgetsPage.navigateToSubMenu('Progress Bar');
  await progressBarPage.checkProgressBarPage();
  await progressBarPage.startProgressBar();


});