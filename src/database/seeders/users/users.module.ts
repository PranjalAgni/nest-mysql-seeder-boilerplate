import { Module } from '@nestjs/common';
import { userProviders } from '../../../user/user.providers';
import { UserSeederService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserSeederService],
  exports: [UserSeederService],
})
export class UserSeederModule {}
