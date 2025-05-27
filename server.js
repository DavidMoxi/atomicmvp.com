import express from "express";
import next from "next";
import { parse } from "url";

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const port = process.env.PORT || 8080;
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
