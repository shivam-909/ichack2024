import express from 'express';
import carbonRoutes from './routes/carbonRoutes'
import historyRoutes from './routes/historyRoutes'

const app = express();
const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, TypeScript with Express!');
// });

app.use('/carbonData', carbonRoutes)
app.use('/history', historyRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
