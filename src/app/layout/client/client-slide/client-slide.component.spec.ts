import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSlideComponent } from './client-slide.component';

describe('ClientSlideComponent', () => {
  let component: ClientSlideComponent;
  let fixture: ComponentFixture<ClientSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
