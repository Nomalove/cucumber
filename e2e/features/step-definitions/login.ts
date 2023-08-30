import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the login page', function () {
  // Implement the code to navigate to the login page
  // For example: navigate to your login URL
});
When('I enter my user name {string} and password {string}', function (username, password) {
    
});

When('I click on the login button', function () {
  // Implement the code to click the login button
  // For example: find the login button and click it
});

Then('I should be redirect to the dashboard page', function () {
  // Implement the code to verify the redirection to the dashboard
  // For example: check the URL or elements on the dashboard page
});

Then('I should see a welcome message', function () {
  // Implement the code to verify the presence of a welcome message or element
  // For example: check for a welcome message on the page
});
