/**
 * @file Entry point for the custom Express server used with Next.js.
 * This server forwards all requests to Next.js for handling.
 */

import express from "express";
import next from "next";
import { parse } from "url";

/**
 * Initialize Next.js application.
 * @type {import('next').NextServer}
 */
const app = next({ dev: false });

/**
 * Request handler provided by Next.js.
 */
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  /**
   * Handle all incoming requests using Next.js' handler.
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  server.all("*", (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  /** @type {number|string} */
  const port = process.env.PORT || 8080;

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
