import 'dotenv/config'
import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import morgan from 'morgan'
import authRoute from './routes/UserRoute';
import prodRoute from './routes/prodRoute';
import cartRoute from './routes/cart'
import helpRoute from './routes/HelpRoute'
import cors from 'cors';

const DB_URI = process.env.DB_URI

const app: Express = express();
const PORT = 3002;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors())

app.use("/auth", authRoute)
app.use("/products", prodRoute)
app.use('/product',cartRoute)
app.use('help',helpRoute)


// Connect to MongoDB
Mongoose
  .connect(DB_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
