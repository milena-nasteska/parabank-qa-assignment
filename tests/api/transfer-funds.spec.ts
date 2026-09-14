import { test, expect } from '@playwright/test';

test('Transfer funds between two accounts', async ({ request }) => {
  const fromAccountId = 13566;
  const toAccountId = 13677;

  const transferResponse = await request.post(
    '/parabank/services/bank/transfer',
    {
      params: {
        fromAccountId,
        toAccountId,
        amount: 10
      }
    }
  );

  expect(transferResponse.status()).toBe(200);

  const responseBody = await transferResponse.text();

  expect(responseBody).toContain('Successfully transferred');
});