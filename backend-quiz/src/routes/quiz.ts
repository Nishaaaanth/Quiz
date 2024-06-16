import { Hono } from 'hono';
import questions from '../data/questions';

export const quiz = new Hono();
quiz.get('/quiz', c => c.json({quiz: questions}));
