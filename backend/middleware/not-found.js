const notFound = (req, res) => {
  console.log("ROUTE DOES NOT EXIST");
  return res.status(404).send("not found");
};

module.exports = notFound;
