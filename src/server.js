import app from "./app.js";

import http from "http";

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const startServer = (port) => {
  server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

};
startServer(PORT);
