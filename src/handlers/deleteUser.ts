import client from "../db.ts";

export async function deleteUser({response, params}:any) {
    try {
        const query = await client.query("DELETE FROM user WHERE id = ?", params.id);
        response.body = {
            res: true,
            msg: "User Deleted Successfully"
        }
    } catch (error) {
        response.body = {
            res: false,
            msg: "Error At Deleting The User"
        }
    }
}