import { RequestHandler } from "express";

export const configCors: RequestHandler = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
};

