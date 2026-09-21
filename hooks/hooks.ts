import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomFix } from "../utils/fixture";

/*Before (async ()=>{
    console.log(Before);
});*/

Before(async function(this:CustomFix){
    this.browser= await chromium.launch({
        headless: false
    })
    this.context= await this.browser.newContext();
    this.page= await this.context.newPage();
    console.log("browser launch");
  
});


/*After(async ()=>{
console.log(After);
});*/

After (async function (this:CustomFix){
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});