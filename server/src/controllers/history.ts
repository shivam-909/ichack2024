import  { Request, Response } from 'express';
import axios from 'axios';


export const priceRoute = async (req: Request, res: Response) => {
    const {region, sector, startDate, endDate} = req.params
    const countryCode = {"EU": "KEUA", "NA": "KCCA"}
    let apiUrl = "http://localhost:8000/api/v1/etf/historical?symbol="+countryCode.(region)+"&start_date=2021-01-01&end_date=2022-01-01"
    const apiResponse = await axios.get(apiUrl);
    res.send("Hello, Typescript with Express");
}

export const allocationsRoute = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}

export const actualEmissionsRoute = async (req: Request, res: Response) => {
    res.send("Hello, Typescript with Express");
}