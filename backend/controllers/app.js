const asyncWrapper = require("../middleware/async");

const GET = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "GET ROUTE !!" });
});

const POST = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "POST ROUTE !!" });
});

const DELETE = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "DELETE ROUTE !!" });
});

const PATCH = asyncWrapper(async (req, res) => {
  return res.status(200).json({ msg: "PATCH ROUTE !!" });
});

module.exports = { GET, POST, DELETE, PATCH };
