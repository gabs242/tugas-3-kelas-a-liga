import express from 'express';
import cors from 'cors';
import CultureRoute from './routes/CultureRoute.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(CultureRoute);

app.listen (5000, () => console.log('Server running on port 5000'));
