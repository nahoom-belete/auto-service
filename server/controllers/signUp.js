const express = require("express");
const { getConnection, closeConnection} = require("./dbConnection.js")

const submitDetails = async (req, res) => {
   //Get form data from request body
    const frmData = await req.body['formData'];

    console.log(frmData)

    //Create database connection
    const db = await getConnection().then((val) => {return val});

    //Insert user into database
    const result = 
        await insertUser(db, frmData).then((value) => {
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

async function insertUser(conn, frmData) {

    const result = await checkIfUserExists(conn, frmData).then((res) => {return res});
    const query =  `Insert into CUSTOMER(customer_name, customer_surname, customer_email, 
            customer_phone, customer_address, customer_city, customer_region, customer_postal, 
            customer_password, customer_title)
            Values('${frmData.name}', '${frmData.surname}', '${frmData.email}', '${frmData.phone}', 
            '${frmData.streetAddress}', '${frmData.city}', '${frmData.region}', '${frmData.postal}', 
            '${frmData.password}', '${frmData.title}')`;
             
    
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
            console.log(error);
            return -1;
        }
        
        return [true, "Account successfully created"];
    }
}

async function checkIfUserExists(conn, frmData) {
    try {
        const connection = await conn;
        const result = await connection.execute(
            `select * from customer where customer_email = '${frmData.email}' `
        );
        await connection.commit();
        if(result.rows.length == 0) {
            return false;
        } else {
            return true;
        }
    }
    catch(error) {
        console.log(error);
        return -1;
    }
}

module.exports = { submitDetails }