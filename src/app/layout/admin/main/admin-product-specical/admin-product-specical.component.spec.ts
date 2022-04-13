import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductSpecicalComponent } from './admin-product-specical.component';

describe('AdminProductSpecicalComponent', () => {
  let component: AdminProductSpecicalComponent;
  let fixture: ComponentFixture<AdminProductSpecicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductSpecicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductSpecicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
