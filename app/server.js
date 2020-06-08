express = require("express");
const app = express();
const port = 3000;

const routes = require("./routes.js");

app.use("/", routes);

app.listen(port, () => console.log(`We are connected on port ${port}`));
