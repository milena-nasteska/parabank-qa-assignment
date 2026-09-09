import { test, expect } from '@playwright/test';

test('API - Login returns customer data for valid credentials', async ({ request }) => {
  const response = await request.get(
    'http://localhost:8080/parabank/services/bank/login/min/Pass123'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.text();

  expect(responseBody).toContain('<firstName>Milena</firstName>');
  expect(responseBody).toContain('<lastName>Nasteska</lastName>');
});
