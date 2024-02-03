import  { Request, Response } from 'express';


export const sentimentAnalysis = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}