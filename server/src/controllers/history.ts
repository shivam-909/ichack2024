import  { Request, Response } from 'express';
import axios from 'axios';
import { regionMapping } from '../dataMapping';


export const priceRoute = async (req: Request, res: Response) => {
    const {region, sector, startDate, endDate} = req.params
    let apiUrl = `http://localhost:8000/api/v1/etf/historical?symbol=${regionMapping.region}&start_date=${startDate}&end_date=${endDate}`
    try
    {
        const apiResponse = await axios.get(apiUrl);
        res.send(apiResponse);
    }
    catch(error: any)
    {
        res.send({message: error.message})
    }
    
}

export const allocationsRoute = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}

export const actualEmissionsRoute = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}