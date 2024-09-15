const express = require('express');
const router = express.Router();
const userMiddleware = require("../middlewares/user-middleware");
const Blog = require("../models/blog-model");

router.post("/save-draft", userMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const userID = req.userID;
    const email = req.user.email;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required!" });
    }

    try {
        const newBlog = new Blog({
            userID,
            email,
            title,
            content,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog saved successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error saving blog", error });
    }
});

router.get("/my-drafts", userMiddleware, async (req, res) => {
    try {
        const drafts = await Blog.find({ userID: req.userID }).sort({ createdAt: -1 });
        res.status(200).json(drafts);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving drafts", error });
    }
});

module.exports = router;
