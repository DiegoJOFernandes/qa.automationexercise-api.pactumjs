import pactum from 'pactum';
import { deleteAccountSchema } from '../../schemas/delete-account-schema.js';
import createAccount from '../../commands/create-account.js';

describe.skip('Delete User Account - Contract Test', () => {

  it('should validate the contract for deleting a user account', async () => {
    
    const user = await createAccount();
    userEmail = user.payload.email;
    userPassword = user.payload.password;

    const response = await pactum.spec()
      .delete('https://automationexercise.com/api/deleteAccount')
      .withQueryParams({
        email: userEmail,
        password: userPassword
      })
      .expectStatus(200);

    deleteAccountSchema.validate(response.body); 
  });

});
