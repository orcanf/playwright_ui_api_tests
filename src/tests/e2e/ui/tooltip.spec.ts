import { test, expect } from '@playwright/test';
import { HomePage } from '../../../pages/HomePage';
import { WidgetsPage } from '../../../pages/WidgetsPage';
import { ToolTipPage } from '../../../pages/ToolTipPage';


test('Verify tooltip', async ( { page }) => {
    const homePage = new HomePage(page);
    const widgetsPage = new WidgetsPage(page);
    const toolTipPage = new ToolTipPage(page);   

    await homePage.navigateToHomePage('https://demoqa.com/');
    await homePage.checkHomePageOpened();
    await homePage.navigateToSubPage('Widgets');
    await widgetsPage.checkWidgetsPage();
    await widgetsPage.navigateToSubMenu('Tool Tips');
    await toolTipPage.checkToolTipPage();
    await toolTipPage.hoverElement('Hover me to see');    

  });