import mongoose from 'mongoose';
import config from '../config.js';

export default class MongoSingleton {
  static #instance;

  constructor() {
    this.#connectMongoDB()
  }

  static getIntance() {
    if (this.#instance) {
      console.log('Ya existe una instancia de MongoSingleton');
    }else{
      this.#instance = new MongoSingleton();
    } 
      return this.#instance;
    
  }

  #connectMongoDB = async () => {
    try {
      await mongoose.connect(config.MONGODB_URL)
      console.log('Conexión a MongoDB exitosa');
    } catch (error) {
      console.log(error);
    process.exit();
    }
  }
}
