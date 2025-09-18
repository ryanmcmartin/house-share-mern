import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

// import fileRoutes from "./routes/file.routes.js";
// import vectorStoreRoutes from "./routes/vectorStore.router.js";
// import threadRoutes from "./routes/thread.router.js";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

//middlewatre
app.use(
  cors({
    //origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("hi there");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    await connectDB();

    //listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () =>
        console.log(`Server is up and running on PORT: ${ENV.PORT}`)
      );
    }
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};

// export for vercel
export default app;

startServer();
