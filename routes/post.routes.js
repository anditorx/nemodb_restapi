module.exports = (app) => {
  const posts = require("../app/controllers/post.controller");
  const router = require("express").Router();

  router.get("/", posts.findAll);
  //   router.post("/", posts.add);

  app.use("/api/posts", router);
};
