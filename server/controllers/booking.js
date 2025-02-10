const express = require("express");
const { getConnection, closeConnection} = require("./dbConnection.js")

const addBooking = async (req, res) => {

    //Get form data from request body
    const frmData = await req.body['formData'];
   
    //Create database connection
    const db = await getConnection().then((val) => {return val});
    //Insert booking into database
    const result = 
        await insertBooking(db, frmData).then((value) => {
            return value;
        });

    //Send back response
    if(result[0]) {
        console.log(result);
        res.status(200).send(JSON.stringify({message: 'wfw'}));
    } else {
        console.log(result);
        res.status(500).send({message: result[1]});
    }

    //Terminate database connection
    closeConnection(db);
}

async function insertBooking(conn, frmData) {

    const result = await checkIfBookingExists(conn, frmData).then((res) => {return res});
    const query =  `Insert into BOOKING(customer_customer_ID, vehicle_vehicle_ID, booking_date, 
            booking_service_type, dealership)
            Values(1020, 100020, TO_DATE('${frmData.date}', 'yyyy/mm/dd'), '${frmData.service}', 
            '${frmData.dealership}')`;
    
    if(result) {
        return [false, "Booking exists"];
    } else {
        try {
            const connection = await conn;
            const res = await connection.execute(
                query 
            );
            await connection.commit();
        }
        catch(error) {
            // res.status(402).send({message: error});
            console.log(error);
            return -1;
        }
        
        return [true, "Booking successful"];
    }
}

async function checkIfBookingExists(conn, frmData) {
    try {
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
    catch(error) {
        // res.status(401).send({message: error});
        console.log(error);
        return -1;
    }
}

module.exports = { addBooking }