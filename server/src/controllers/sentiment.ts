import  { Request, Response } from 'express';
import { promises as fs } from 'fs';
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
  

export const sentimentAnalysis = async (req: Request, res: Response) => {
    // const jsonFilePath = path.join(process.cwd(), 'data_source', 'prediction.json');

  const filePath = './src/data/sentiment_data.json'; // Specify the path to your JSON file
  readJsonFile(filePath)
    .then(data => res.send(data))
    .catch(error => console.error(error));

}