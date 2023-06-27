import express from './src/index';
import { defineSequelize } from './src/db';

const { db } = defineSequelize;
const PORT = process.env.PORT ?? 8001;

db.sync({ alter: true })
  .then(() => {
    express.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
