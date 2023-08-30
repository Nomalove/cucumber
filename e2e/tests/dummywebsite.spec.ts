import {expect,test} from '@playwright/test'

test('has title', async ({page})=>{
   await page.goto('http://127.0.0.1:5500/cucumber/test-website/index.html');

   await expect(page).toHaveTitle("Nomandla|Blog");
});

