import { config } from 'dotenv';
config(); // Load .env file
import express from 'express';
import connectDB from './db/connect.js';

const app = express();

app.get('/', (req, res) => {
    res.send('<h3>Blog API</h3>')
})
  
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log('start error...', error);
    }
};

await start()