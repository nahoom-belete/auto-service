const express = require("express");

const submitDetails = async (req, res) => {
    body = await req.body;
    console.log("Details submitted")
}

module.exports = { submitDetails }