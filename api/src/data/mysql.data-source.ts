import {Knex} from "knex";

export abstract class MysqlDataSource {
    constructor(
        protected connection: Knex
    ) {
    }

    protected query() {
        return this.connection.queryBuilder()
    }

    protected async exec(query: Knex.QueryBuilder): Promise<any> {
        console.log(query.toSQL())

        try {
            return await query;
        } catch (knexError) {
            console.log(knexError)
            throw knexError
        }
    }
}
