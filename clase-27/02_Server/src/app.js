import express from 'express';
import __dirname from '../utils.js';
import config from '../config.js';
import MongoSingleton from '../config/mongodb-singleton.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
  res ,send({message: "success", payload:"Success!!"});
});

  const SERVER_PORT = config.port;
  app.listen(SERVER_PORT, () => {
    console.log("Server running on port: " + SERVER_PORT);
  });

  const mongoInstance = async () => {
    try {
      await MongoSingleton.getInstance()
    } catch (error) {
      console.log(error)
    }
  }

  const mongoInstance2 = async () => {
    try {
      await MongoSingleton.getInstance()
    } catch (error) {
      console.log(error)
    }
  }



  mongoInstance()
  mongoInstance2()


