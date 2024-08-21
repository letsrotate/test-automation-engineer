import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './products.interface';
import { Observable, of, throwError } from 'rxjs';

fdescribe('ProductsService', () => {
  let productService: ProductsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ProductsService, { provide: HttpClient, useValue: httpClientSpy }]
    });
    productService = TestBed.inject(ProductsService);
   
  });

  afterEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
  })

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  it('should get products', () => {
    const expectedProducts: Array<Product> = [
      { id: 1, name: 'Product 1', description: '', price: 100 },
      { id: 2, name: 'Product 2', description: '', price: 200 }
    ];

    httpClientSpy.get.and.returnValue(of(expectedProducts));

    productService.getProducts().subscribe({
      next: (products) => {
        expect(products).toEqual(expectedProducts);
      }, 
      error: (error) => {
        fail(error);
      }
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);

  })


  it('should get product by id', () => {
    const expectedProduct: Product = { id: 1, name: 'Product 1', description: '', price: 100 };

    httpClientSpy.get.and.returnValue(of(expectedProduct));

    productService.getProductById(1).subscribe({
      next: (product) => {
        expect(product).toEqual(expectedProduct);
      }, 
      error: (error) => {
        fail(error);
      }
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return error when id is not found during getProductById', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'Product with id 12 not found',
      statusText: 'Not Found',
      status: 404
    });

    httpClientSpy.get.and.returnValue(throwError(() => errorResponse));
    
    productService.getProductById(12).subscribe({
      next: () => fail('should throw error'),
      error: (error) => {
        expect(error).toEqual(errorResponse)
      }
    })

    expect(httpClientSpy.get.calls.count()).toBe(1);

  })

  it('should create product', () => {
    const product: Product = { id: 1, name: 'Product 1', description: '', price: 100 };

    httpClientSpy.post.and.returnValue(of(product));

    productService.createProduct(product).subscribe({
      next: (product) => {
        expect(product).toEqual(product);
      }, 
      error: (error) => {
        fail(error);
      }
    });

    expect(httpClientSpy.post.calls.count()).toBe(1);
  })

  it('should update product', () => {
    const product: Product = { id: 1, name: 'Product 2', description: '', price: 100 };

    httpClientSpy.put.and.returnValue(of(product));

    productService.updateProduct(1, product).subscribe({
      next: (product) => expect(product).toEqual(product),
      error: (error) => fail('should not get error')
    })

  })

  it('should delete product', () => {
    httpClientSpy.delete.and.returnValue(of(null));
    productService.deleteProduct(1).subscribe({
      next: (response) => {
        expect(response).toBeNull();
      },
      error: (error) => {
        fail(error);
      }
    })

  })

});
