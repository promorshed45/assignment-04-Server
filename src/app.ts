import express, { Request, Response } from "express";
import cors from 'cors';

const app = express();

// parsers
app.use(express.json());
app.use(cors());



app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

// api not found message
app.use((req: Request, res: Response,) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;