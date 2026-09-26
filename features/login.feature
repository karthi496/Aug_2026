@smoke
Feature: login functionality

    Background: Given user launch the application

    Scenario: validate valid username and password

        When user enter the valid username "karthikayani"
        And user enter the valid password "S51ZN2"
        And user click the login button
        Then validate the home page


    Scenario: validate invalid username and password

        When user enter the invalid username "karthikayani"
        And user enter the invalid password "S51ZN2"
        And user click the login button
        Then validate the home page


    Scenario Outline: validate username and password

        When enter the username "<username>"
        And enter the password "<password>"
        And click the button
        Then validate homepage

        Examples:
            | username     | password |
            | karthikayani | S51ZN2   |
            | Admin1       | karthi   |
            | Admin 2      | kayani   |



