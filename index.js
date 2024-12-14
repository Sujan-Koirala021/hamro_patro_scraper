import express from 'express';
import newsRoute from './routes/news.route.js'
import cors from  'cors';

const app = express();

const PORT = 3000; 

app.use(cors())
app.use("/api/v1", newsRoute)

app.listen(PORT,(req, res) => {
    console.log(`Listening to port ${PORT}`)
})