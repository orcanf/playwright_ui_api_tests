import { test, expect } from '@playwright/test';
import { HomePage } from '../../../pages/HomePage';
import { InteractionsPage } from '../../../pages/InteractionsPage';
import { DroppablePage } from '../../../pages/DroppablePage';


test('Verify drag and drop', async ( { page }) => {
    const homePage = new HomePage(page);
    const interactionsPage = new InteractionsPage(page);
    const droppablePage = new DroppablePage(page);

    await homePage.navigateToHomePage('https://demoqa.com/');
    await homePage.checkHomePageOpened();
    await homePage.navigateToSubPage('Interactions');
    await interactionsPage.checkInteractinsPage();
    await interactionsPage.navigateToSubMenu('Droppable');
    await droppablePage.checkDroppablePage();
    await droppablePage.dragAndDrop('#draggable', '#droppable');
    await droppablePage.verifyDragAndDrop();


  });