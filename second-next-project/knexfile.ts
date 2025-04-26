import type { Knex } from "knex";
import dotenv from 'dotenv';
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT) || 5432
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: "./src/lib/db/migrations",
            extension: 'ts'
        }
    }

};

module.exports = config;
