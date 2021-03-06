import client from "../db.ts";

export async function createUser({response,request}:any) {
    if (!request.hasBody) {
        response.status = 400;
        response.body = {
            res: false,
            msg: "No Data"
        };
    } else {
        const { name,country } = await request.body().value;
        try {
            const query = await client.query(`INSERT INTO user(name,country) VALUES("${name}","${country}")`)
            
            response.body = {
                res: true,
                msg: "User Created Successfully"
            }
        } catch(err) {
            response.body = {
                res: false,
                err: err
            }
        }
    }
}