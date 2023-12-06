const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// POST a new contact
router.post('/', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

// Export router
module.exports = router;
