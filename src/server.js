const express = require("express");
const { userPermission, adminPermission } = require("./permission");

const app = express();

app.get("/actions/user", userPermission, (_req, res) =>
  res.json({ message: "User action" })
);

app.get("/actions/admin", adminPermission, (_req, res) =>
  res.json({ message: "Admin action" })
);

app.listen(3000, () => console.log("Server running at 3000!"));
