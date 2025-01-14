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

async function insertBooking(conn) {
    const connection = await conn;
    await connection.execute(
        `Insert into BOOKING(customer_customer_ID, vehicle_vehicle_ID, booking_date, booking_service_type)
        Values(1020, 100020, TO_DATE('2025/01/25', 'yyyy/mm/dd'), 'major')`
    );
    // await connection.commit();
    // console.log("Result is:", result.rows);
    // console.log("Result:", result);
}

async function closeConnection(conn) {
    const connection = await conn;
    await connection.close();  
}

module.exports = { getConnection, insertBooking, closeConnection }