import express, { Request, Response } from "express";
import cors from 'cors';
import router from "./app/routes";

const app = express();

// parsers
app.use(express.json());
app.use(cors({origin: '*', credentials: true}));


// application routes
app.use('/api', router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developer!, Assignment-4");
});

// api not found message
app.use((req: Request, res: Response,) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;