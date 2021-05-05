import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Product } from '../models/product';
import { HttpErrorResponse } from '@angular/common/http';
import { defer } from 'rxjs';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
    Speed of the products returned fromt the API is slow, 
    not getting the data in 5000ms

  it('Get the data from the API via GET', (done) => {
    const dummyProduct: Product[] = [{
      "rating": 5,
      "name": "dolor sit qui",
      "size": "M - Medium",
      "picture": "http://placehold.it/370x250",
      "savings": "$175",
      "oldPrice": "$325",
      "price": "$227",
      "isFav": true,
      "_id": "5a3964f2b3701658152a1c81",
      "url": "product/5a3964f2b3701658152a1c81"
    }];
    service.getProducts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).not.toEqual(dummyProduct);
      done();
    });
  });
  */
});
