import process from 'process';

export default {
  PORT: process.env.SERVICE_APP_PORT!,
  CLIENTS: (process.env.SERVICE_APP_CLIENTS?.split(',') || []),
  DATABASE: {
    HOST: process.env.SERVICE_APP_DB_HOST!,
    PORT: Number(process.env.SERVICE_APP_DB_PORT)!,
    USER: process.env.SERVICE_APP_DB_USERNAME!,
    PASSWORD: process.env.SERVICE_APP_DB_PASSWORD!,
    DB_NAME: process.env.SERVICE_APP_DB_NAME!
  }
};