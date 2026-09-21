Feature: DataTable concept
@hashes
Scenario: Login with credentials
Given User enters the login details
|username|password|
|karthikayani|S51ZN2|

@rowshash
Scenario: Login with credentials with rowHash
Given User enters the login details using rowsHash
|username|karthikayani|
|password|S51ZN2|

@raw
Scenario: Login with credentials with raw
Given User enters the login details using raw
|username|karthikayani|
|password|S51ZN2|

@rows
Scenario: Login using credentials with rows
  Given User enters the login  using rows

    | username     | password |
    | karthikayani | S51ZN2   |


