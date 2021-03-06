const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// // connect to database
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Cannot connect to database | ERROR:", err);
    process.exit();
  });

//
// db.mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
//   console.log("connect to db")
// );

// routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
  });
});

require("./routes/post.routes")(app);
require("./routes/auth.routes")(app);
