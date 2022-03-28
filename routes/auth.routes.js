module.exports = (app) => {
  const user = require("../app/controllers/user.controller");
  const router = require("express").Router();

  router.post("/register", user.register);
  router.post("/login", user.login);
  // router.get("/:id", posts.findOne);
  // router.put("/:id", posts.update);
  // router.delete("/:id", posts.delete);

  app.use("/api/auth", router);
};
