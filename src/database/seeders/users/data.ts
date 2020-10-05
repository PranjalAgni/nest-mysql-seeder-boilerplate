import { name, random } from 'faker';

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
}

export const generateUsers = () => {
  const LIMIT = 1000;
  const users: IUser[] = [];

  while (users.length < LIMIT) {
    users.push({
      firstName: name.firstName(),
      lastName: name.lastName(),
      age: random.number(),
    });
  }

  console.log(JSON.stringify(users, null, 2));
  return users;
};
