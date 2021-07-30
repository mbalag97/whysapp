const applyRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("API is running fine");
  });
  // create-user. login, channel, search-user, channel-list, send-message
  app.post("/user", (req, res) => {
    res.send("create a user");
  });
  app.post("/login", (req, res) => {
    res.send("user login");
  });
  app.post("/channel", (req, res) => {
    res.send("channel");
  });
  app.get("/search", (req, res) => {
    res.send("search a user");
  });
  app.get("/channel-list", (req, res) => {
    res.send("channel-list");
  });
  app.post("/message", (req, res) => {
    res.send("message");
  });
};

export default applyRoutes;
