import mongoose from 'mongoose';

import express, {Express, NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

const cors = require('cors')
const routes = require('./routes');

const app: Express = express()
const port = process.env.PORT || 4040
mongoose.connect(process.env.MONGODB_URI ?? '');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors(), (req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    next()
})

app.use("/", routes);

app.get("*", function (req, res) {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})