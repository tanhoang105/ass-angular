import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecicalComponent } from './product-specical.component';

describe('ProductSpecicalComponent', () => {
  let component: ProductSpecicalComponent;
  let fixture: ComponentFixture<ProductSpecicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpecicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpecicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
