const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");


// Add Employee

router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      success: true,
      employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// Get All Employees

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json({
      success: true,
      employees,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// Get Single Employee

router.get("/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    res.json({
      success: true,
      employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// Update Employee

router.put("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json({
      success: true,
      employee,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// Delete Employee

router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Employee Deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;