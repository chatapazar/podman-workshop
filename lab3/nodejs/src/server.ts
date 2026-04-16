import express from 'express';
import { format } from 'date-fns';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  const currentTime = new Date();
  res.json({
    message: 'Hello from TypeScript Docker!',
    formattedTime: format(currentTime, 'PPpp'),
    timestamp: currentTime.toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 