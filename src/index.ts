import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
  res.send('Hello world! nodemon working');
})

export default app;
 
