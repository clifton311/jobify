import express from "express";

const app = express();
import dotenv from "dotenv";
dotenv.config();

//db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobRoutes.js'

//middleware
import notFoundMiddle from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddle);
app.use(errorHandlerMiddleWare);



const port = process.env.PORT || 3003;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port number: ${port}`);
    });
  } catch (error) {
    console.log(error)
  }
};

start()