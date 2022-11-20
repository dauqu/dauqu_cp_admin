const express = require("express");
const router = express.Router();

//Models
const Technologies = require("../models/technologies_schema");

//Get all technologies
router.get("/", async (req, res) => {
    try {
        const technologies = await Technologies.find();
        res.json(technologies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Get one technology
router.get("/:id", (req, res) => {
    res.json(res.technology);
});

//Create one technology
router.post("/", async (req, res) => {

    //CHeck if the technology already exists
    const tech = await Technologies.findOne({ username: req.body.username.toLowerCase() });
    if (tech != null) {
        return res.status(400).json({ message: "Technology already exists" });
    }

    //Create new technology
    const technology = new Technologies({
        name: req.body.name,
        username: req.body.username.toLowerCase(),
        description: req.body.description,
        logo: req.body.logo,
        build_info: req.body.build_info,
    });

    //Save technology
    try {
        const newTechnology = await technology.save();
        res.status(201).json(newTechnology);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete one technology
router.delete("/:id", async (req, res) => {
    try {
        await res.technology.remove();
        res.json({ message: "Deleted technology" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Export 
module.exports = router;