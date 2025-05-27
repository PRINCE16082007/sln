import express from 'express';
import bodyParser from 'body-parser';
// ... other imports

const app = express();
app.use(bodyParser.json());

// placeholder endpoint
app.post('/watermark', (req, res) => {
  res.status(501).json({ error: 'Not implemented yet' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
