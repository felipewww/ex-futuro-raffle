import {MysqlDataSource} from "@/data/mysql.data-source";
import {UserModel} from "@/data/models/user.model";

export class UsersData extends MysqlDataSource {
    async findByUsername(username: string): Promise<Array<UserModel>> {
        const query = this.query()
                .select('*')
                .from('users')
                .where('username', username)

        return this.exec(query)
    }
}
