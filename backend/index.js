const express = require("express");
const router = require("./routes/app");
const notFound = require("./middleware/not-found");
const errorHandleMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", router);
app.use(notFound);
app.use(errorHandleMiddleware);

// IF do not require DB
/* app.listen(PORT,() => {
     console.log(`Server listening at PORT ${PORT}`)
 })*/

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
