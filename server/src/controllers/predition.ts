import  { Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as Papa from 'papaparse';
import path from 'path';

async function readJsonFile(filePath: string): Promise<any> {
    try {
      // Construct the absolute path for the file
      const absolutePath = path.resolve(filePath);
      // Read the file content
      const data = await fs.readFile(absolutePath, 'utf-8');
      // Parse the JSON content and return
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading the JSON file:', error);
      throw error; // Rethrow the error for the caller to handle
    }
}


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

  export const predictionAnalysis = async (req: Request, res: Response) => {
    try {
      const jsonFilePath = './src/data/prediction.json'; // Specify the path to your JSON file
      const csvFilePath = './src/data/carbon_allowance.csv'; // Specify the path to your CSV file
  
      // Await the asynchronous functions to ensure data is fetched before proceeding
      const priceData = await readJsonFile(jsonFilePath);
      const allocationData = await parseCsvFile(csvFilePath);
  
      // Sending the response with priceChart and allocationChart
      res.send({
        priceChart: priceData,
        allocationChart: allocationData
      });
  
    } catch (error: any) { // Catching and handling any errors
      res.status(500).json({ message: error.message });
    }
  };