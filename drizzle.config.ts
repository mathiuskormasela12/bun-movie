import type {Config} from 'drizzle-kit';
import config from '@/config';

export default {
  schema: './src/models/schemas.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    user: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    database: config.DATABASE.DB_NAME
  },
} satisfies Config;