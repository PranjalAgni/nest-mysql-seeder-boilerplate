import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../user/user.entity';
import { DatabaseModule } from '../database.module';
import { Seeder } from './seeder';
import { UserSeederModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UserSeederModule],
  providers: [Seeder],
})
export class SeedersModule {}
