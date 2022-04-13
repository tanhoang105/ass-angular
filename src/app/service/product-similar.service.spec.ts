import { TestBed } from '@angular/core/testing';

import { ProductSimilarService } from './product-similar.service';

describe('ProductSimilarService', () => {
  let service: ProductSimilarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSimilarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
