import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightListComponent } from './weight-list.component';

describe('WeightListComponent', () => {
  let component: WeightListComponent;
  let fixture: ComponentFixture<WeightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
