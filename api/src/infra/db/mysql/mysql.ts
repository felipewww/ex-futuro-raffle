import { knex } from 'knex';
import * as process from "node:process";

export function knexConnection() {
    return knex({
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,

        },
    });
}
