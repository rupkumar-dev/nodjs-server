import express from "express";
import helmet from "helmet";
import cors from "cors";

//import router from "./routes/index.js";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('🚀 Women Safety App Backend is Live');
});

//app.use("/api", router);

export default app;
