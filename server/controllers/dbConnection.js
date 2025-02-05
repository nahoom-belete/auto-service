const oracledb = require('oracledb');

const connStr = "localhost/xe";
const usr = "auto_admin#s";
const psw = "admin123";

async function getConnection() {
    const conn = await oracledb.getConnection(
        {
            user          : usr,
            password      : psw, 
            connectString : connStr
        }
    );

    return conn
}

async function insertBooking(conn, query) {
    const connection = await conn;
    await connection.execute(
        query
    );
    await connection.commit();
}

async function closeConnection(conn) {
    const connection = await conn;
    await connection.close();  
}

module.exports = { getConnection, insertBooking, closeConnection }