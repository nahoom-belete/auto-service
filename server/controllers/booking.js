const express = require("express");

const addBooking = async (req, res) => {
    body = await req.body;
    console.log("Details submitted")
}

module.exports = { addBooking }