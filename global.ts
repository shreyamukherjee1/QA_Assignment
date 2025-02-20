import { chromium, ChromiumBrowser } from "@playwright/test";

async function global() 
{
    const browser = await chromium.launch();
   const context = await browser.newContext()
  const page = await context.newPage();
//login
await page.goto('https://scopex.money/#faq');
await page.getByRole('link', { name: 'Login' }).click();
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('shreyamukh40@gmail.com');
await page.getByRole('textbox', { name: 'password' }).fill('Shreya1!');
await page.getByRole('button', { name: 'Log in' }).click();
await page.waitForNavigation({ url: 'https://scopex.money/Dashboard' });

await page.context().storageState({path:"./playwright/.auth/auth.json"});

}
export default global;