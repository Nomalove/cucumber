import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect, Page } from '@playwright/test';

let page: Page;

Given('I am on the login page', async () => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('https://itthynk.co.za/');
});

When('I enter my username {string} and password {string}', async (username, password) => {
  await page.fill('#username-input', username);
  await page.fill('#password-input', password);
});

When('I click on the login button', async () => {
  await page.click('#login-button');
});

Then('I should be redirected to the dashboard page', async () => {
  // Implement verification logic for the dashboard page URL or elements
  const url = await page.url();
  expect(url).toContain('dashboard');
});

Then('I should see a welcome message', async () => {
  // Implement verification logic for the presence of a welcome message
  const welcomeElement = await page.waitForSelector('.welcome-message');
  expect(welcomeElement).not.toBeNull();
});
