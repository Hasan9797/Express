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
        console.log(req.user)
    res.send(`Get user with id ${req.params.id}`)
})
    .delete((req,res) => {
    res.send(`Delete user with id ${req.params.id}`)
})
    .put((req,res) => {
    res.send(`Update user with id ${req.params.id}`)
});

// params

const users = [{name: "Hasan"}, {name: "Samar"}]

router.param("id", (req,res,next,id) =>{
    req.user = users[id];
    next();
})

module.exports = router;