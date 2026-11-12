
const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// POST: Save customer contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check empty fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // Save message to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!",
      contact: newContact,
    });

  } catch (error) {
    console.error("Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
});

// GET: View all contact messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      contacts,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
