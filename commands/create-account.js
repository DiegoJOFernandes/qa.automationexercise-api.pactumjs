import pactum from 'pactum';
import { faker } from '@faker-js/faker';

export default async function createAccount() {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    title: faker.helpers.arrayElement(['Mr', 'Mrs']),
    birth_date: faker.number.int({ min: 1, max: 31 }).toString(),
    birth_month: faker.number.int({ min: 1, max: 12 }).toString(), 
    birth_year: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).getFullYear().toString(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.helpers.arrayElement(['United States', 'Australia', 'Canada']),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number()
  };

  const response = await pactum
    .spec()
    .post('https://automationexercise.com/api/createAccount')
    .withHeaders({
      'Content-Type': 'application/json'
    })
    .withJson(user)
    .expectStatus(200)

  return {
    payload: user,
    res: response.body
  };
} 
