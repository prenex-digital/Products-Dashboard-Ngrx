

import * as express from 'express';
import { Application } from "express";
import { getAllPhotos, getAllPosts, getAllProducts } from "./get-product.route";

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/products').get(getAllProducts);
app.route('/api/posts').get(getAllPosts);
app.route('/api/photos').get(getAllPhotos);

const httpServer: any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});