const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.get("*",function(req, res) {
// 	console.log('hit our snapshot route -----', __dirname );
//   res.sendFile(path.join(__dirname, "../client/build"));
// });

module.exports = router;
