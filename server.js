
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/portfolioRoute.js';


//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", router);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
