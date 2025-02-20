import { test } from "@playwright/test";

test("Login setup", async({page})=>{
//login
await page.goto('https://scopex.money/#faq');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('shreyamukh40@gmail.com');
  await page.getByRole('textbox', { name: 'password' }).fill('Shreya1!');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.waitForNavigation({ url: 'https://scopex.money/Dashboard' }); 
  await page.getByRole('navigation').getByRole('button').click();
  await page.waitForTimeout(5000);
await page.context().storageState({path:"./playwright/.auth/auth.json"});



}
)