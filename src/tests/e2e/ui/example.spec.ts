import { HomePage } from '../../../pages/HomePage';
import { AddUserPage } from '../../../pages/AddUserPage';
import { WebTablesPage } from '../../../pages/WebTablesPage';
import { ElementsPage } from '../../../pages/ElementsPage';
import { test, expect } from '@playwright/test';
import { EditUserPage } from '../../../pages/EditUserPage';
import { FormsPage } from '../../../pages/FormsPage';



test('Verify user can enter new data into the table', async ( { page }) => {
    const homePage = new HomePage(page);
    const webTablesPage = new WebTablesPage(page);
    const addUserPage = new AddUserPage(page);
    const elementsPage = new ElementsPage(page);

    const user1 = {
      firstName: 'Alden',
      lastName: 'Cantrell',
      age: 30,
      userEmail: 'test@test.com',
      salary: 12345,
      department: 'QA',
    };

  
    await homePage.navigateToHomePage('https://demoqa.com/');
    await homePage.checkHomePageOpened();
    await homePage.navigateToSubPage('Elements');
    await elementsPage.checkElementsPage();
    await elementsPage.navigateToSubMenu('Web Tables');  
    await webTablesPage.checkWebTablesPage()
    await webTablesPage.clickAddButton();
    await addUserPage.checkAddUserPage();
    await addUserPage.addUser(user1);
    await webTablesPage.checkUserAdded(user1);    

  });


  test('Verify user can edit data into the table', async ( { page }) => {
    const homePage = new HomePage(page);
    const webTablesPage = new WebTablesPage(page);
    const addUserPage = new AddUserPage(page);
    const elementsPage = new ElementsPage(page);
    const editUserPage = new EditUserPage(page);

    const user2 = {
      firstName: 'Gerimedika',
      lastName: 'BV',
    };

 
    await homePage.navigateToHomePage('https://demoqa.com/');
    await homePage.checkHomePageOpened();
    await homePage.navigateToSubPage('Elements');
    await elementsPage.checkElementsPage();
    await elementsPage.navigateToSubMenu('Web Tables');  
    await webTablesPage.checkWebTablesPage();
    await webTablesPage.clickEditButton();
    await editUserPage.editUser(user2);
    await webTablesPage.checkUserUpdated(user2);  

  });


  test('Verify user can submit a form', async ( { page }) => {
    const homePage = new HomePage(page);
    const formsPage = new FormsPage(page);

    const formData = {
      firstName: 'Alden',
      lastName: 'Cantrell',
      userEmail: 'test@test.com',
      userNumber: 5056320304,
      subjectsInput: 'Subjects',
      currentAddress: 'Current Address'
    };
 
    await homePage.navigateToHomePage('https://demoqa.com/');
    await homePage.checkHomePageOpened();
    await homePage.navigateToSubPage('Forms');
    await formsPage.checkFormsPage();
    await formsPage.navigateToSubMenu('Practice Form');
    await formsPage.fillPracticeForm(formData);  
    await formsPage.makeGenderSelection('Male');
    await formsPage.makeHobbySelection('Sports');
    await formsPage.uploadProfilePicture();
    await formsPage.setBirthDate();
    await formsPage.setStateAndCity();
    await formsPage.submitForm();
  
    
  });




  