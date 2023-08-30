import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://itthynk.co.za/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("ITTHYNK Smart Solutions");
});

