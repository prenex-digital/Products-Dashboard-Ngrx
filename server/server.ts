

import * as express from 'express';
import { Application } from "express";
import { getAllProducts } from "./get-product.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/products').get(getAllProducts);

const httpServer: any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});