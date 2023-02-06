import express from 'express';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(process.env.PORT || 3000, () => {
  // do something
});