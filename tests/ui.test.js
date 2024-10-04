const { test, expect } = require("@playwright/test");

test("Verify All Books link is visible", async ({ page }) => {
  //Open the application
  await page.goto("http://localhost:3000");

  //Locate page navbar
  await page.waitForSelector("nav.navbar");

  //Get All Books link
  const allBooksLink = await page.$('a[href="/catalog"]');

  //Check element text is correct
  const allBooksText = await allBooksLink.textContent();

  //Check if element is visible
  const isElementVisible = await allBooksLink.isVisible();

  //Verify element is visible
  expect(isElementVisible).toBe(true);

  //Verify element text
  expect(allBooksText).toEqual("All Books");
});

test("Verify Login link is visible", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector("nav.navbar");
  const loginLink = await page.$('a[href="/login"]');
  const loginLinkText = await loginLink.textContent();
  const isElementVisible = await loginLink.isVisible();

  expect(isElementVisible).toBe(true);
  expect(loginLinkText).toEqual("Login");
});

test("Verify Register link is visible", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector("nav.navbar");
  const registerLink = await page.$('a[href="/register"]');
  const registerLinkText = await registerLink.textContent();
  const isElementVisible = await registerLink.isVisible();

  expect(isElementVisible).toBe(true);
  expect(registerLinkText).toEqual("Register");
});

test("Verify valid user can login", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForSelector("nav.navbar");
  const loginLink = await page.$('a[href="/login"]');
    await loginLink.click();

    //Fill the user data
    await page.fill('#email', "peter@abv.bg");
    await page.fill("#password", "123456");

    //Click on login button
     const loginButton = await page.$('//*[@id="login-form"]/fieldset/input');
    await loginButton.click();
    
    //Verify the logout button is present
    const logoutButton = await page.$('#logoutBtn');
    const logoutButtonText = await logoutButton.textContent();

    expect(logoutButtonText).toEqual("Logout");
});
