import express from "express";
import db from "./config/dbConnect.js";
import routes from "./Routes/index.js";

db.on("erro", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Database connected");

});

const app = express();
app.use(express.json());
routes(app);

export default app