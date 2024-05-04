import {drizzle} from 'drizzle-orm/node-postgres';
import {Client} from 'pg';
import config from '@/config';

const client = new Client({
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  user: config.DATABASE.USER,
  password: config.DATABASE.PASSWORD,
  database: config.DATABASE.DB_NAME
});

await client.connect();
export default drizzle(client);