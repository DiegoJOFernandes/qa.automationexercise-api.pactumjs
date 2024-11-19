import pactum from 'pactum';

describe.skip('Delete User Account - Functional', () => {

  it('should delete a user account successfully', async () => {
    const requestParams = {
      email: 'diego@terra.com.yd',
      password: 'Auc@1234567'      
    };

    const response = await pactum
      .spec()
      .delete('https://automationexercise.com/api/deleteAccount')
      .withQueryParams(requestParams)
      .expectStatus(200)              
      .expectJsonLike({               
        responseCode: 200,
        message: 'Account deleted!'
      });

    console.log('Response Body:', response.body);
  });
});
