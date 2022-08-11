const bodyParser = require('body-parser');
const express = require('express')
import {Express, NextFunction, Request, Response} from 'express';

require('dotenv').config();

const cors = require('cors')
const app: Express = express()
const port = process.env.PORT || 4040

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors(), (req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    next()
})

// app.use("/news", routes);

app.get("*", function (req, res) {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})