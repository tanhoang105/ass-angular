import { TestBed } from '@angular/core/testing';

import { ProductSpecicalService } from './product-specical.service';

describe('ProductSpecicalService', () => {
  let service: ProductSpecicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSpecicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
