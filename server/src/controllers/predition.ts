import { error } from 'console';
import  { Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as Papa from 'papaparse';
import path from 'path';

async function readJsonFile(filePath: string): Promise<any> {
    try {
      // Construct the absolute path for the file
      const absolutePath = path.resolve(filePath);
      // Read the file content
      console.log(absolutePath)
      const data = await fs.readFile(absolutePath, 'utf-8');
      // Parse the JSON content and return
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading the JSON file:', error);
      throw error; // Rethrow the error for the caller to handle
    }
}
  

export const predictionAnalysis = async (req: Request, res: Response) => {
    // const jsonFilePath = path.join(process.cwd(), 'data_source', 'prediction.json');

  const filePath = './data/prediction.json'; // Specify the path to your JSON file
  readJsonFile(filePath)
    .then(data => console.log(data))
    .catch(error => console.error(error));

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

export const carbonAllocation = async (req: Request, res: Response) => {
    const csvFilePath = './data_source/carbon_allowance.csv';
    parseCsvFile(csvFilePath)
        .then(data => console.log(data))
        .catch(error => console.error(error))
}