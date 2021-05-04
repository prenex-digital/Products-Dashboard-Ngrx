import { Request, Response } from 'express';
import { PRODUCTS, POSTS, PHOTOS } from './data_correct';

export function getAllProducts(req: Request, res: Response) {

  console.log("Retrieving product data ...");

  setTimeout(() => {

    res.status(200).json({ payload: Object.values(PRODUCTS) });

  }, 1000);
}

export function getAllPosts(req: Request, res: Response) {

  console.log("Retrieving Posts data ...");

  setTimeout(() => {

    res.status(200).json({ payload: Object.values(POSTS) });

  }, 1000);
}

export function getAllPhotos(req: Request, res: Response) {

  console.log("Retrieving Photos data ...");

  setTimeout(() => {

    res.status(200).json({ payload: Object.values(PHOTOS) });

  }, 1000);
}