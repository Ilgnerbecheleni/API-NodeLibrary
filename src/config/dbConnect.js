import mongoose from "mongoose";


mongoose.connect("mongodb+srv://ilgner:123@ilgnerbd.5vod6ae.mongodb.net/alura-node");// passa string de conexão


let db = mongoose.connection;

export default db;


