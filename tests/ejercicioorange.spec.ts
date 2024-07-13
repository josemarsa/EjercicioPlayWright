import { test, expect } from '@playwright/test';

test('test orange', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('input[name=\'username\']').fill('Admin')
  await page.locator('input[name=\'password\']').fill('admin123')
  await page.click('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')
  await page.click('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a/span')
  await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
  await page.locator('input[name=\'firstName\']').fill('Jose')
  await page.locator('input[name=\'middleName\']').fill('Martin')
  await page.locator('input[name=\'lastName\']').fill('Seminario')
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/input').fill('jose@gmail.com')
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/input').fill('951963852')
  await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/div/div[1]/div/div[2]/input').fill('Prueba')
  /*await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[6]/div/div/div/div[2]/textarea').fill('Esto es para una prueba')
  await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[8]/button[2]')
  await page.pause*/
  });
