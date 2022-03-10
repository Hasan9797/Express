const Express = require("express");
const app = Express();

const router = require("./routes/users");

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index", {title: 'Chuvaaak :)'});
});

app.use("/users", router);

app.listen(5000, () => console.log("Server is running..."))