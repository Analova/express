express = require("express");
router = express.Router();

router.get("/", (req, res) => res.send("<h1>Welcome to Billy Page</h1>"));

router.get("/about/:username/:state", function (req, res) {
  const user = req.params;
  const query = req.query;
  return res.send(`
  <h1>User: ${user.username}</h1>
  <h1>User: ${user.state}</h1>
  <h1>Low: ${query.low}</h1>
  <h1>Heigh: ${query.high}</h1>`);
});

module.exports = router;
