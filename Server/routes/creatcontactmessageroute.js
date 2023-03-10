const express = require ('express');
const contactController= require('../controllers/contactMessage/contactmessagecontroller');

const router= express.Router();




router.post("/create",contactController.contactMessageCreate)
router.get("/getContacts",contactController.getContacts)

module.exports = router