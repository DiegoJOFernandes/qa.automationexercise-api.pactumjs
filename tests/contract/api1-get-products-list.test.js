import pactum from 'pactum';
import { responseSchema } from '../../schemas/product-schema.js';

describe('Get All Products List - Contract Test', () => {

  it('should validate the contract of Get All Products List', async () => {
      const response = await pactum
      .spec()
      .get('https://automationexercise.com/api/productsList')
      .expectStatus(200)
      .returns('body'); 

    const { error } = responseSchema.validate(response);

    if (error) {
      throw new Error(`Schema validation error: ${error.message}`);
    }   
  });
});
