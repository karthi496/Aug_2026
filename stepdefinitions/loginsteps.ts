import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

Given('user launch the application', function () {
  console.log("launch the application");
});

When('user enter the valid username {string}', function (user) {
  console.log(user);
});

When('user enter the valid password {string}', function (pass) {
  console.log(pass);
});

When('user click the login button', async function () {
  console.log("click login button");
});

Then('validate the home page', function () {
  console.log("home page");
});

// Scenario 2

When('user enter the invalid username {string}', function (user) {
    console.log(user);

});

When('user enter the invalid password {string}', function (pass) {
   console.log(pass);
});

// Scenario Outline

Given('Browser launch', function () { 
  console.log("Browser Launch");
});

When('enter the username {string}', function (user) {
  console.log(user)
});

When('enter the password {string}', function (pass) {
  console.log(pass);
});
When('click the button', function () {
  console.log("click button");
});

Then('validate homepage', function () {
  console.log("home page");
});

//hashes

Given('User enters the login details', async function (dataTable) {
 const data=dataTable.hashes(); 
 console.log(data);
 console.log(data[0].username)
});

//rowsHash
Given('User enters the login details using rowsHash', function (dataTable) {
const data= dataTable.rowsHash();
console.log(data);
console.log(data.username);
});

//raw
Given('User enters the login details using raw', function (dataTable) {
  const data= dataTable.raw();
  console.log(data);
  
});
//rows
Given('User enters the login  using rows', function (dataTable) {
  const data = dataTable.rows();
  console.log(data);
});
