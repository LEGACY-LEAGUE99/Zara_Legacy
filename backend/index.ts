import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import auth from './routes/UserRoute'
import help from './routes/HelpRoute'
import prodRoute from './routes/prodRoute'
import itemsRoute from './routes/itemsRoute'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

 

const app  = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())




app.get('/', (req: Request, res: Response) => {res.send('Hello, world!');});
app.use("/",auth);
app.use("/",help);
app.use("/", prodRoute)
app.use("/" , itemsRoute)


mongoose.connect('mongodb+srv://messud:azerty123@seniordata.sg77wxf.mongodb.net/?retryWrites=true&w=majority') .then(() => {
 console.log("Connected to MongoDB")}).catch((err) => {
        console.error("Failed to connect to MongoDB", err);
      });


const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
