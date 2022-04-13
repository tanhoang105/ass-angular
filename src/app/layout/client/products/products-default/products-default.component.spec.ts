import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDefaultComponent } from './products-default.component';

describe('ProductsDefaultComponent', () => {
  let component: ProductsDefaultComponent;
  let fixture: ComponentFixture<ProductsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
