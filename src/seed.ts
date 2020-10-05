import { NestFactory } from '@nestjs/core';
import { Seeder } from './database/seeders/seeder';
import { SeedersModule } from './database/seeders/seeders.module';

async function bootstrap() {
  NestFactory.create(SeedersModule)
    .then(appContext => {
      const seeder = appContext.get(Seeder);
      seeder
        .seed()
        .then(() => {
          console.log('Seeding completed');
        })
        .catch(() => {
          console.error('Seeding failed');
        })
        .finally(() => appContext.close());
    })
    .catch(err => {
      throw err;
    });
}
bootstrap();
