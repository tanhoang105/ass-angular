import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSliceComponent } from './admin-slice.component';

describe('AdminSliceComponent', () => {
  let component: AdminSliceComponent;
  let fixture: ComponentFixture<AdminSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
