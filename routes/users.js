const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.send("User name");
});

router.get('/new', (req,res) => {
    res.send("New User");
});

router.route("/:id")
    .get((req,res) => {
    res.send(`Get user with id ${req.params.id}`)
})
    .delete((req,res) => {
    res.send(`Delete user with id ${req.params.id}`)
})
    .put((req,res) => {
    res.send(`Update user with id ${req.params.id}`)
});

module.exports = router;