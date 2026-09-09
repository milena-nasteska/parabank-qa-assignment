export function createTestUser() {
  return {
    firstName: 'Milena',
    lastName: 'Nasteska',
    address: 'Address1',
    city: 'Skopje',
    state: 'MK',
    zipCode: '1000',
    phone: '070123456',
    ssn: '123456789',
    username: `user${Date.now()}${Math.floor(Math.random() * 1000)}`,
    password: 'Test123!'
  };
}