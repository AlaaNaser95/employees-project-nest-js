import * as dotenv from 'dotenv';

dotenv.config();
const env = process.env;

const ormConfig = {
  type: env.DATABASE_TYPE || 'mysql',
  host: env.DATABASE_HOST || 'localhost',
  port: parseInt(env.DATABASE_PORT) || 3306,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE,
  entities: ['dist/database/entities/*.js'],
  synchronize: env.DATABASE_SYNC === 'true' ? true : false,
  logging: env.DATABASE_LOGGING === 'true' ? true : false,
  migrationsTableName: 'migrations',
  migrations: ['dist/database/migrations/*.js'],
};

export default ormConfig;
