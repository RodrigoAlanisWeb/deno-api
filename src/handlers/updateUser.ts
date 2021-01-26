import client from "../db.ts";

export async function updateUser({response,request,params}:any) {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            res: false,
            msg: "No Data"
        };
    } else {
        const { name,country } = await request.body().value;
        try {
            const query = await client.query(`UPDATE user SET name = "${name}", country = "${country}" 
            WHERE id = ${params.id} `)
            
            response.body = {
                res: true,
                msg: "User Updated Successfully"
            }
        } catch(err) {
            response.body = {
                res: false,
                err: err
            }
        }
    }
}