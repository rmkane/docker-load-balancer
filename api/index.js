import express from "express";

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const serverName = process.env.SERVER_NAME;

const formatJson = (json) => JSON.stringify(json, null, 2);

const api = express();

let visitCount = 0;

api.get("/", async (req, res) => {
  visitCount++;
  res.setHeader("Content-Type", "application/json");
  res.end(
    formatJson({
      message: "Welcome traveller!",
      serverName,
      visitCount,
    })
  );
});

api.listen(SERVER_PORT, () => {
  console.log(`API ${serverName} is up and running!`);
});

api.on("SIGTERM", process.exit);
api.on("SIGINT", process.exit);
