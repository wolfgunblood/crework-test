const express = require("express");
const router = express.Router();

const { GET, POST, DELETE, PATCH } = require("../controllers/app");

router.route("/").get(GET).post(POST).delete(DELETE).put(PATCH);

module.exports = router;
