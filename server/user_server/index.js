require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./view/routes/User"); // Update the import to use the User route
const errorMiddleware = require("./middleware/Error");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

// * Routes
app.get("/", (req, res) => {
  res.send("API RESPONSE");
});

app.use("/api/user", userRoute); // Update the route path to use the User route

app.use(errorMiddleware);

/* 
  ADD CORS OPTIONS FOR SECURITY ON DEPLOYMENT AND ADD TO .ENV
  const corsOptions = {
    origin: ['http://example.com','http://192.168.1.1:6127'],
    optionsSuccessStatus: 200
  }
  app.use(cors(corsOptions));
*/

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Connected to userDB database`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`userDB Database Error:`, error);
  });
