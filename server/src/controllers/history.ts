import  { Request, Response } from 'express';
import axios from 'axios';
import { regionMapping } from '../dataMapping';


export const priceRoute = async (req: Request, res: Response) => {
    const {region, sector, startDate, endDate} = req.params
    let apiUrl = `http://localhost:8000/api/v1/etf/historical?symbol=${regionMapping.region}&start_date=${startDate}&end_date=${endDate}`
    try
    {
        const apiResponse = await axios.get(apiUrl);
        res.send({
            historyPrice: apiResponse,
            historyAllocations: getAllocations(),
            historyEmissions: getEmissions()
        });
    }
    catch(error: any)
    {
        res.send({message: error.message})
    }
    
}

const getAllocations = () => {
    const allocations = {
        "Technology": 24.24,
        "Financial Services": 14.2,
        "Healthcare": 13.1,
        "Consumer Cyclical": 12.01,
        "Industrials": 8.86,
        "Consumer Defensive": 6.32,
        "Communication Services": 11.14,
        "Other": 10.13
    }
    return allocations;
}

const getEmissions = async () => {
    let apiUrl = "https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=DE&begin=2019-02-01&end=2019-03-01"
    try
    {
        const apiResponse = await axios.get(apiUrl);
        return apiResponse;
    }
    catch(error: any)
    {
        return error.message
    }
}