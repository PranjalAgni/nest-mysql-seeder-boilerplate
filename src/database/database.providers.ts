import { createConnection } from 'typeorm';
import * as ormconfig from './ormconfig';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(ormconfig),
  },
];
