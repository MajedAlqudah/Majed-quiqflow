import { jest, describe, it, expect } from '@jest/globals';
import User from './User.js';
import Admin from './Admin.js';

describe('User Class', () => {
  it('should create a user with name and email', () => {
    const user = new User({ name: 'Test User', email: 'test@email.com' });

    expect(user.name).toBe('Test User');
    expect(user.email).toBe('test@email.com');
    expect(user.isLoggedIn).toBe(false);
  });

  it('Should log in the user', () => {
    const user = new User({ name: 'Test User', email: 'test@email.com' });
    user.login();

    expect(user.isLoggedIn).toBe(true);
  });

  it('Should log out the user', () => {
    const user = new User({ name: 'Test User', email: 'test@email.com' });

    user.login();
    user.logout();

    expect(user.isLoggedIn).toBe(false);
  });

  it('Should update user profile', () => {
    const user = new User({ name: 'Test User', email: 'test@email.com' });
    user.updateProfile({ email: 'test@domain.com' });

    expect(user.email).toBe('test@domain.com');
  });
});

/*----------------------------------------------------------------------------*/
describe('Admin Class', () => {
  it('should create an admin with all user properties plus a role', () => {
    const admin = new Admin({ name: 'AdminUser', email: 'admin@test.com' });

    expect(admin.name).toBe('AdminUser');
    expect(admin.isLoggedIn).toBe(false);

    expect(admin.role).toBe('admin');
  });

  it('should be able to use inherited methods like login', () => {
    const admin = new Admin({ name: 'AdminUser', email: 'admin@test.com' });
    admin.login();
    expect(admin.isLoggedIn).toBe(true);
  });

  it('should be able to delete a user', () => {
    const admin = new Admin({ name: 'AdminUser', email: 'admin@dev.jo' });
    const userToDelete = new User({
      name: 'RegularUser',
      email: 'test@test.com',
    });

    // Mock console.log to test the output
    console.log = jest.fn();
    admin.deleteUser(userToDelete);
    expect(console.log).toHaveBeenCalledWith(
      'AdminUser deleted user RegularUser'
    );
  });
});