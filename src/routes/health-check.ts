import { RequestHandler } from 'express';

export const healthCheck: RequestHandler = (_req, res) => {
    res.send('OK');
};
