import {UsersData} from "@/data/users.data";
import {knexConnection} from "@/infra/db/mysql/mysql";

export class LoginUseCase {
    async handle(
        username: string,
        password: string,
    ) {
        const connection = knexConnection();

        const userData = new UsersData(connection);

        const user = await userData.findByUsername(username)

        return user
    }
}
