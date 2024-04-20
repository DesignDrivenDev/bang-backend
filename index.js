import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToMongo } from "./utils/db.js";
import insightRoute from "./routes/insights.route.js";
import userRoute from "./routes/user.route.js";
dotenv.config();

const app = express();

app.use(express.json());
const port = 8000;
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/insight", insightRoute);
app.use("/api/users", userRoute);

async function bootstrap() {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

bootstrap();
