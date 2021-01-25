import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = new Client();
client.connect({
    hostname: '127.0.0.1',
    username: 'root',
    db: 'deno',
    password: ''
});

export default client;