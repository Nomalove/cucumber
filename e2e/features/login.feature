Feature: login

Scenario: successfull login
Given I am on the login page 
When Start to type your When step here I enter my username and password
And I click on the login button
Then It should redirect me to the home dashboard
And I should see a welcome page

