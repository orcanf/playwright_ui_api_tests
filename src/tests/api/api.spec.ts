import { test, expect } from '@playwright/test';

test.describe.serial('API Testing', () => {
    const baseURL = "https://demoqa.com";
    let token;
    let userId;
    let username;

    test('Creation of user accaount', async ({ request }) => {
        const response = await request.post(`${baseURL}/Account/v1/User`, {
            data: {
                userName: "orcanfurkandagli13",
                password: "12Furkan@."
            },
        })
        const responseBody  = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(201);
        expect(responseBody.userID).toBeTruthy();
        expect(responseBody.username).toBe("orcanfurkandagli13");
        userId = responseBody.userID;
        username = responseBody.username;
    
    });

    test('Creation of user account with unsatisfied cridential', async ({ request }) => {
        const response = await request.post(`${baseURL}/Account/v1/User`, {
            data: {
                userName: "furkandagli1",
                password: "12Furkan."
            },
        })
        const responseBody  = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(400);
        expect(responseBody.code).toBe("1300");
    
    });

    test('Creation of user account with same username', async ({ request }) => {
        const response = await request.post(`${baseURL}/Account/v1/User`, {
            data: {
                userName: username,
                password: "12Furkan@."
            },
        })
        const responseBody  = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(406);
        expect(responseBody.code).toBe("1204")            
    
    });

    test('Generate user token', async ({ request }) => {
        const response = await request.post(`${baseURL}/Account/v1/GenerateToken`, {
            data: {
                userName: username,
                password: "12Furkan@."
            },
        })
        const responseBody  = JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBeTruthy();
        token = responseBody.token;
        console.log(token);            
    });


    test('Generate user token with invalid cridential', async ({ request }) => {
        const response = await request.post(`${baseURL}/Account/v1/GenerateToken`, {
            data: {
                userName: username,
                password: "12Furkan@.."
            },
        })
        const responseBody  = JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.token).toBe(null);
        expect(responseBody.status).toBe("Failed");
        expect(responseBody.result).toBe("User authorization failed.")
        console.log(token);            
    });

    test('Get available books', async ({ request }) => {
        const response = await request.get(`${baseURL}/BookStore/v1/Books`, {
                 headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept": "*/*",
                    "Content-Type": "application/json"

            },
        })
        const responseBody  = JSON.parse(await response.text());
        const books = responseBody.books;
        expect(response.status()).toBe(200);    
        
        console.log(userId);      
    });

    test('Add book', async ({ request }) => {
        const response = await request.post(`${baseURL}/BookStore/v1/Books`, {
            data: {
                userId: userId,
                collectionOfIsbns: [
                  {
                    isbn: "9781491904244"
                  },
                  {
                    isbn: "9781491950296"
                  }
                ]
              }, headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept": "*/*",
                    "Content-Type": "application/json"

            },
        })
        const responseBody  = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(201);       
    });

    test('Add non-existing book', async ({ request }) => {
        const response = await request.post(`${baseURL}/BookStore/v1/Books`, {
            data: {
                userId: userId,
                collectionOfIsbns: [
                  {
                    isbn: "1234"
                  }
                ]
              }, headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept": "*/*",
                    "Content-Type": "application/json"

            },
        })
        const responseBody  = JSON.parse(await response.text());
        console.log(responseBody);
        expect(response.status()).toBe(400);        
    });


    test('Delete book', async ({ request }) => {
        const response = await request.delete(`${baseURL}/BookStore/v1/Book`, {
            data: {
                isbn : "9781491950296",
                userId: userId
              }, headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept": "*/*",
                    "Content-Type": "application/json"

            },
        })
        expect(response.status()).toBe(204);         
    });

    test('Try to delete already deleted book', async ({ request }) => {
        const response = await request.delete(`${baseURL}/BookStore/v1/Book`, {
            data: {
                isbn : "9781491950296",
                userId: userId
              }, headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept": "*/*",
                    "Content-Type": "application/json"

            },
        })
        const responseBody  = JSON.parse(await response.text());
        expect(response.status()).toBe(400);
        expect(responseBody.code).toBe("1206");       
    });

    test('Delete user', async ({ request }) => {
        const response = await request.delete(`${baseURL}/Account/v1/User/${userId}`, {
            headers:{
                "Authorization": `Bearer ${token}`,
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
        });
    
    }); 
});