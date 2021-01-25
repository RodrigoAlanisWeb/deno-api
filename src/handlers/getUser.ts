import client from "../db.ts";

export async function getUser({response, params}:any) {
    try {
        const user = await client.query("SELECT * FROM user WHERE id = ?",params.id);
        response.status = 200;
        response.body = {
            res: true,
            user: user[0]
        }
    } catch (error) {
        response.status = 404;
        response.body = {
            res: false,
            error
        }
    }
}