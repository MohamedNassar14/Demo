import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubCategoriesDashboarddComponent } from './all-sub-categories-dashboardd.component';

describe('AllSubCategoriesDashboarddComponent', () => {
  let component: AllSubCategoriesDashboarddComponent;
  let fixture: ComponentFixture<AllSubCategoriesDashboarddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSubCategoriesDashboarddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSubCategoriesDashboarddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
