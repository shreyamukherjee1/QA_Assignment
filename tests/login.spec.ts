import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.getByRole('button', { name: 'Recipients' }).click();
  await page.getByRole('link', { name: 'Add Recipient' }).click();
  await page.getByRole('textbox', { name: 'Enter recipient name' }).click();
  await page.getByRole('textbox', { name: 'Enter recipient name' }).fill('Shreya mukherjee');
  await page.getByRole('textbox', { name: 'Enter recipient nick name' }).click();
  await page.getByRole('textbox', { name: 'Enter recipient nick name' }).fill('Shreya');

  await page.getByRole('textbox', { name: 'Enter bank account number' }).click();
  await page.getByRole('textbox', { name: 'Enter bank account number' }).fill('4406101000845');
  await page.getByRole('textbox', { name: 'Enter IFSC code' }).click();
  await page.getByRole('textbox', { name: 'Enter IFSC code' }).fill('CNRB0004406');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.screenshot({ path: 'account.png' });
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Confirm' }).waitFor({ state: 'visible' });
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('navigation').getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Log out' }).click();
  await page.screenshot({ path: 'logout.png' });
});  