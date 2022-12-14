import express from 'express';
import FileUpload from "express-fileupload";
import cors from 'cors';
import CultureRoute from './routes/CultureRoute.js';
import db from './config/Database.js';

const app = express();

(async () => {
    await db.sync();
  })();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(CultureRoute);

app.listen (5000, () => console.log('Server running on port 5000'));
