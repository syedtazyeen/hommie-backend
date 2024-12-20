import { faker } from '@faker-js/faker';

export class UserMock {
  static createNewUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
}
