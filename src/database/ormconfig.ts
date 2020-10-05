import { join } from 'path';
import { ConnectionOptions } from 'typeorm';

const connectOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'weekendtech',
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [join(`${__dirname}`, '/migrations/*.ts')],
  migrationsTableName: 'custom_migration_table',
  synchronize: true,
  logging: true,
  cli: {
    migrationsDir: 'migrations',
  },
};

export = connectOptions;
