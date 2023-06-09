import express from 'express';
import mongoose from 'mongoose';
import { configCors } from './config/cors';
import errorHandlingController from './config/errors';
import { AppRouter } from './config/router';
import { configMail } from './utils/mail';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

configMail();
app.use(configCors);

AppRouter.forEach(config => {
  const { path, router } = config;
  app.use(path, router);
});
  
app.use(errorHandlingController);

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.bhp9h.mongodb.net/app-api?retryWrites=true&w=majority`).then(response => {
  console.log('DB connnection successful')
}).catch(err => {
  console.log(err);
});



app.listen(process.env.PORT || 3000, () => {
  console.log("app running on port: 3000");
  // do something
});