const express = require("express");
const { getConnection, insertBooking, closeConnection } = require("./dbConnection.js")

const addBooking = async (req, res) => {
    body = await req.body;
    console.log(await body)
    const db = getConnection();
    insertBooking(db);
    closeConnection(db);
}

module.exports = { addBooking }