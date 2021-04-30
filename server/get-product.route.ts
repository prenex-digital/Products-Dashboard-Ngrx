import { Request, Response } from 'express';
import { PRODUCTS } from './data';

export function getAllProducts(req: Request, res: Response) {

    console.log("Retrieving product data ...");

    setTimeout(() => {

      res.status(200).json({payload:Object.values(PRODUCTS)});

    }, 1000);
}