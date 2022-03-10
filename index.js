const Express = require("express");
const app = Express();

const path = require("path");

app.get('/', (req, res) => {
    // res.send('Hello World');
    // res.status(200).send("Hello chuvak :)");
    // res.download("index.js");
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(5000, () => console.log("Server is running..."))