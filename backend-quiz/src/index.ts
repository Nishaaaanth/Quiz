import { Hono } from 'hono';
import { quiz } from './routes/quiz';
import {cors} from 'hono/cors';

const app = new Hono();

app.use("/api/v1/*", cors());

app.route('/api/v1', quiz);
app.get('/', c => c.json({quiz: "/api/v1/quiz"}));

export default app;
