import { test, expect } from '@playwright/test';

// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://vamosmitimiti.com' : 'https://mitimiti-qa.netlify.app';

test('has title', async ({ page }) => {
  await page.goto('./');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/MitiMiti App/);
});

test('count links', async ({ page }) => {
  await page.goto('./');

  // Click the get started link.
  const availableLinks = page.getByRole('img');
  await expect(availableLinks).toHaveCount(16);
});

