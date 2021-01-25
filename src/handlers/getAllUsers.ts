import client from "../db.ts";

export async function getAllUsers(ctx:any) {
    try {
        const users = await client.query("SELECT * FROM user");
        ctx.response.body = {
            res: true,
            users
        };
    } catch (err) {
        ctx.response.body = {
            res: false,
            error: err
        }
    }
    
}