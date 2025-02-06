const express = require("express");
const { getConnection, closeConnection } = require("./dbConnection.js")

const addBooking = async (req, res) => {
    const frmData = await req.body['formData'];
    const query =  `Insert into BOOKING(customer_customer_ID, vehicle_vehicle_ID, booking_date, booking_service_type, dealership)
        Values(1020, 100020, TO_DATE('${frmData.date}', 'yyyy/mm/dd'), '${frmData.service}', '${frmData.dealership}')`;
    const db = getConnection();
    const result = await insertBooking(db, query, frmData).then((val) => {return val});
    console.log(result)
    if(result) {
        res.status(200).send({message: 'ok'});
    } else {
        res.status(400).send({message: 'bad'});
    }
    closeConnection(db);
}

async function insertBooking(conn, query, frmData) {
    const result = await checkIfBookingExists(conn, frmData).then((res) => {return res});
    console.log(result)
    if(result) {
        return false;
    } else {
        const connection = await conn;
        const res = await connection.execute(
            query 
        );
        await connection.commit();
        return true;
    }
}

async function checkIfBookingExists(conn, frmData) {
    const connection = await conn;
    const result = await connection.execute(
        `select * from booking where customer_customer_id = '1020' 
        and vehicle_vehicle_id = 100020 and booking_date = TO_DATE('${frmData.date}', 'yyyy/mm/dd') `
    );
    await connection.commit();
    if(result.rows.length == 0) {
        return false;
    } else {
        return true;
    }

}

module.exports = { addBooking }