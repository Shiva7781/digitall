const router = require("express").Router();
const Emp = require("../models/emp.model");

// register
router.post("/", async (req, res) => {
  let { name, email, profile, post } = req.body;

  try {
    if (!name || !email || !profile || !post) {
      return res.status(400).json({ message: "All fields required" });
    }

    // Creating a new mongoose doc with hashed password
    const newEmp = new Emp(req.body);

    const savedEmp = await newEmp.save();

    res.status(201).json(savedEmp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allEmp = await Emp.find();

    res.status(200).json(allEmp);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
