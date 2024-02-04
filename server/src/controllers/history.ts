import  { Request, Response } from 'express';
import axios from 'axios';
import { promises as fs } from 'fs';
import * as Papa from 'papaparse';
import path from 'path';

function parseCsvFile(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const absolutePath = path.resolve(filePath);
        fs.readFile(absolutePath, 'utf8')
        .then(fileContent => {
          Papa.parse(fileContent, {
            header: true,  // Treat the first row as headers
            skipEmptyLines: true,
            complete: (results) => resolve(results.data),
            error: (error: any) => reject(error)
          });
        })
        .catch(error => {
          console.error('Error reading the CSV file:', error);
          reject(error);
        });
    });
  }

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

export const priceRoute = async (req: Request, res: Response) => {
    try {
        const csvFilePath = './src/data/history_price.csv'; // Specify the path to your CSV file
        const priceData = await parseCsvFile(csvFilePath);
        const apiUrl = "https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=DE&begin=2019-02-01&end=2019-03-01";
        
        // Make the API request
        const emissionResponse = await axios.get(apiUrl);
        
        // Extract only the data part of the Axios response
        const emissionData = emissionResponse.data;
        
        res.send({
            historyPrice: priceData,
            historyAllocations: allocations,
            historyEmissions: emissionData // Send only the data, not the entire Axios response object
        });
    } catch (error: any) {
        res.send({ message: error.message });
    }
};

