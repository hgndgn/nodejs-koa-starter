import { checkCredentials } from '../src/routes';

describe('Dummy test', () => {
  it('should return true with valid credentials', () => {
    const username = 'username';
    const password = '123';
    const res = checkCredentials(username, password);

    expect(res).toBeTruthy();
  });

  it('should return false with invalid credentials', () => {
    const username = '';
    const password = '123';
    const res = checkCredentials(username, password);

    expect(res).toBeFalsy();
  });
});
