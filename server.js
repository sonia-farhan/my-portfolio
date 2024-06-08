
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import router from './routes/portfolioRoute.js';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname , "clinet")))

//routes
app.use("/api/v1/portfolio", router);

const buildPath = path.resolve(__dirname, './client/build'); // Adjusted path
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(buildPath, 'index.html'));
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
