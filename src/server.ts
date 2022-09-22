import dotenv from 'dotenv';
import express from 'express';

import { healthCheck } from 'routes/health-check';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.get('/health-check', healthCheck);

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
