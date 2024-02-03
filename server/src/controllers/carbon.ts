import  { Request, Response } from 'express';


export const testRoute = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}