import { Page} from '@playwright/test';
export class LoginPage{
     private page:Page;
     constructor(page:Page){
        this.page= page;
     }
     async browserLaunch(){
        await this.page.goto("https://adactinhotelapp.com/");
     }
      async username(username:string){
        await this.page.fill("#username",username );
      }
      async password(password:string){
        await this.page.fill("#password", password);
      }
       async loginbutton(){
        await this.page.click("#login");
       }

}