Feature:login

Scenario:login
Given I am on the login page 
When  I enter my user name "exampleuser" and password "secretpassword"
And I click on the login button
Then I should be redirect to the dashboard page
Then I should see a welcome message

