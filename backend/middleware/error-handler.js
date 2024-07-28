const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    console.log(`Custom Api Error`, err);
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(`Error`, err);
  return res.status(500).send("something went wrong");
};

module.exports = errorHandleMiddleware;
