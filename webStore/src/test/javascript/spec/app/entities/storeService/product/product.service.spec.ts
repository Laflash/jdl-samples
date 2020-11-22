import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from 'app/entities/storeService/product/product.service';
import { IProduct, Product } from 'app/shared/model/storeService/product.model';
import { UnitOfMeasurement } from 'app/shared/model/enumerations/unit-of-measurement.model';
import { ProductStatus } from 'app/shared/model/enumerations/product-status.model';

describe('Service Tests', () => {
  describe('Product Service', () => {
    let injector: TestBed;
    let service: ProductService;
    let httpMock: HttpTestingController;
    let elemDefault: IProduct;
    let expectedResult: IProduct | IProduct[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ProductService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new Product(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        false,
        UnitOfMeasurement.PIECE,
        0,
        ProductStatus.ONSALE,
        0,
        0,
        0,
        0,
        0
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a Product', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new Product()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a Product', () => {
        const returnedFromService = Object.assign(
          {
            name: 'BBBBBB',
            sku: 'BBBBBB',
            description: 'BBBBBB',
            srp: 1,
            taxable: true,
            salesUnit: 'BBBBBB',
            salesQuantity: 1,
            status: 'BBBBBB',
            grosWeight: 1,
            netWeight: 1,
            length: 1,
            width: 1,
            height: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of Product', () => {
        const returnedFromService = Object.assign(
          {
            name: 'BBBBBB',
            sku: 'BBBBBB',
            description: 'BBBBBB',
            srp: 1,
            taxable: true,
            salesUnit: 'BBBBBB',
            salesQuantity: 1,
            status: 'BBBBBB',
            grosWeight: 1,
            netWeight: 1,
            length: 1,
            width: 1,
            height: 1,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a Product', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
