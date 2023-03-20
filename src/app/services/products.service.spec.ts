
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {  ProductsService } from './products.service';
import { HttpClient, HttpParams } from '@angular/common/http';


describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;
  let http:HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ProductsService]
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
    http=TestBed.inject(HttpClient)
  });
  
afterEach(() => {
  httpMock.verify();
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const product=[{id:1,price:124,title:'title',image:'image',description:'description',category:'jewelery'}]
  
  it('should return Observable of array of categories ',()=>{
    const category=["men's clothing"]
    service.getCategories().subscribe(categories=>{
      expect(categories.length).toBe(1)
      expect(categories).toEqual(category)
    })
    const req = httpMock.expectOne(`${service.url}/categories`);
    expect(req.request.method).toBe("GET");
    req.flush(category);
  });
  it('should return detail of one product',()=>{
    const params=1
    let detail=product[0]
    service.getSingleProduct(params).subscribe(product=>{
      expect(product).toBeTruthy()
      expect(product).toEqual(detail)
    })
    const req=httpMock.expectOne(`${service.url}/${params}`)
    expect(req.request.method).toBe("GET");
    req.flush(detail);
  })
  it('should return all products ',()=>{
    service.getProducts().subscribe(products=>{
      expect(products.length).toBeGreaterThanOrEqual(1)
      expect(products).toEqual(product)
    })
    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe("GET");
    req.flush(product);
  })
   it('should return products of category ',()=>{
    let category='jewelery'
    
    service.getProducts(category).subscribe(products=>{
      expect(products.length).toBeGreaterThanOrEqual(1)
      products.forEach((val)=>{
        expect(val.category).toContain(category)
      })
    })
    const req = httpMock.expectOne(`${service.url}/category/${category}`);
    expect(req.request.method).toBe("GET");
    req.flush(product);
  })
  })
 
  

