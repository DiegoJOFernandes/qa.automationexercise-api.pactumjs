import { expect } from 'chai';
import createAccount from '../../commands/create-account.js';

describe.skip('Create/Register User Account - Functional', () => {

  it('should create a new user successfully', async () => {
    const user = await createAccount();
    
    expect(user.res.message).to.have.property('message', 'User created!');
    expect(user.res).to.have.property('name', user.payload.name);
    expect(user.res).to.have.property('email', user.payload.email);
  });

});
