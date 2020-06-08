express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Welcome to Billy</h1>"));

app.listen(port, () => console.log(`We are connected on port ${port}`));
