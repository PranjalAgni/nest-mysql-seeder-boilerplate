import { Injectable } from '@nestjs/common';
import { UserSeederService } from './users/users.service';

@Injectable()
export class Seeder {
  constructor(private readonly userSeederService: UserSeederService) {}

  async seed() {
    await this.users()
      .then(completed => {
        console.log('Successfully completed seeding: ', completed);
        Promise.resolve();
      })
      .catch(err => {
        console.error(err);
        Promise.reject(err);
      });
  }

  async users() {
    return await Promise.all(this.userSeederService.create())
      .then(createdUsers => Promise.resolve(createdUsers.length))
      .catch(Promise.reject);
  }
}
