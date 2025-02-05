const express = require("express");
const { getConnection, insertBooking, closeConnection } = require("./dbConnection.js")

const addBooking = async (req, res) => {
    const frmData = await req.body['formData'];
    const query =  `Insert into BOOKING(customer_customer_ID, vehicle_vehicle_ID, booking_date, booking_service_type)
        Values(1020, 100020, TO_DATE('2025/01/25', 'yyyy/mm/dd'), '${frmData.service}')`;
    const db = getConnection();
    await insertBooking(db, query);
    closeConnection(db);
}

module.exports = { addBooking }