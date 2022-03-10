const Express = require("express");
const app = Express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index", {title: 'Chuvaaak :)'});
});

app.listen(5000, () => console.log("Server is running..."))