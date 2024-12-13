import express from 'express';
import newsRoute from './routes/news.route.js'

const app = express();

const PORT = 3000; 

app.use("/api/v1", newsRoute)

app.listen(PORT,(req, res) => {
    console.log(`Listening to port ${PORT}`)
})