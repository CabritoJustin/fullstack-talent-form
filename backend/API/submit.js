const express = require("express");
const router = express.Router();
const Form = require("../Models/Form");

router.post("/", async (req, res) => {
  try {
    const { name, age, email, talent } = req.body;

    const newForm = new Form({
      name,
      age,
      email,
      talent,
    });

    await newForm.save();

    console.log("Saved to MongoDB:", newForm);

    res.status(200).json({
      message: "Form Submitted and Saved Successfully",
      data: newForm,
    });
  } catch (error) {
    console.log("Error saving data:", error);

    res.status(500).json({
      message: "Error saving form data",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Form.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching data",
      error: error.message,
    });
  }
});

module.exports = router;