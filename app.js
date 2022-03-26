const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/post.routes")(app);

// connect to database
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
app.get("/", (req, res) => {
  res.json({
    message: "Welcome!",
  });
});

// serve
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});