import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Load up the routes
app.use(routes);

// Start the API
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});