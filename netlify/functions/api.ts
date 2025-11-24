import "dotenv/config";
import serverless from "serverless-http";

import { createServer } from "../../server";

const app = createServer();

export const handler = serverless(app, {
  basePath: "/.netlify/functions/api",
  binary: ["image/*", "video/*", "application/octet-stream"],
  request(request: any) {
    // Ensure the request body is properly passed through
    if (!request.body) {
      request.body = "";
    }
    return request;
  },
});
