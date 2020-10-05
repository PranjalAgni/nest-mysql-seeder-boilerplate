import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../user/user.entity';
import { generateUsers, IUser } from './data';

@Injectable()
export class UserSeederService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  create(): Array<Promise<User>> {
    return generateUsers().map(async (user: IUser) => {
      return await this.userRepository.save(user);
    });
  }
}
