 import { setWorldConstructor } from "@cucumber/cucumber";
 import { Browser, BrowserContext, Page } from "@playwright/test";
 export class CustomFix{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
 }
 setWorldConstructor(CustomFix);