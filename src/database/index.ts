import { Client } from "pg";

const host =  process.env.host ?? "";
const port = Number(process.env.port);
const database = process.env.database ?? "";
const user = process.env.user ?? "";
const password = process.env.password ?? "";

console.log("Password", password);

const connect = async () => {
    const client = new Client({
        host,
        port,
        database,
        user,
        password,
    });
    await client.connect();
}

export {connect}
