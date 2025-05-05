import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsDashboardComponent } from './all-products-dashboard.component';

describe('AllProductsDashboardComponent', () => {
  let component: AllProductsDashboardComponent;
  let fixture: ComponentFixture<AllProductsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllProductsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
