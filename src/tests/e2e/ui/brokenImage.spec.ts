import { test, expect } from '@playwright/test';
import { AddUserPage } from '../../../pages/AddUserPage';
import { WebTablesPage } from '../../../pages/WebTablesPage';
import { ElementsPage } from '../../../pages/ElementsPage';
import { HomePage } from '../../../pages/HomePage';
import { BrokenLinksImagesPage } from '../../../pages/BrokenLinksImagesPage';

test('Verify the broken image', async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);
  const brokenLinlsImagesPage = new BrokenLinksImagesPage(page);


  await homePage.navigateToHomePage('https://demoqa.com/');
  await homePage.checkHomePageOpened();
  await homePage.navigateToSubPage('Elements');
  await elementsPage.checkElementsPage();
  await elementsPage.navigateToSubMenu('Broken Links - Images');
  await brokenLinlsImagesPage.checkBrokenLinksImagesPage();
  await brokenLinlsImagesPage.verifyBrokenImage();


});