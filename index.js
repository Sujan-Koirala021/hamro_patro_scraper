import express from 'express';
import newsRoute from './routes/news.route.js'
import rashifalRoute from './routes/rashifal.route.js'
import forexRoute from './routes/forex.route.js'

import cors from  'cors';

const app = express();

const PORT = 3000; 

app.use(cors())
app.use("/api/v1/news", newsRoute)
app.use("/api/v1/rashifal", rashifalRoute)
app.use("/api/v1/forex", forexRoute)



app.listen(PORT,(req, res) => {
    console.log(`Listening to port ${PORT}`)
})