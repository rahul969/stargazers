import { test, expect } from '@playwright/test';

test('Seach on textbox and selected item', async ({ page }) => {
  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');
  // Click [data-testid="searchinput"]
  await expect(page.locator('[data-testid="searchinput"]')).toHaveValue("react");
  // const searchinput = await page.locator('[data-testid="searchinput"]').inputValue();
  // expect(searchinput).toBe("react");
  await page.locator('[data-testid="searchinput"]').click();
  // Click [data-testid="searchinput"]
  await page.locator('[data-testid="searchinput"]').fill('javascript');
  // Click [data-testid="searchbutton"]
  await page.locator('[data-testid="searchbutton"]').click();
  // Click [data-testid="badgeOnSelect"]
  await page.locator('[data-testid="badgeOnSelect"]').click();
  // Click text=eslint 9927
  await page.locator('text=eslint').click();
  // Click [data-testid="badgeOnSelect"]
  await page.locator('[data-testid="badgeOnSelect"]').click();
  await expect(page.locator('[data-testid="searchinput"]')).toHaveValue("eslint");
});