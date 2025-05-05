import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMainCategoriesDashboardComponent } from './all-main-categories-dashboard.component';

describe('AllMainCategoriesDashboardComponent', () => {
  let component: AllMainCategoriesDashboardComponent;
  let fixture: ComponentFixture<AllMainCategoriesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMainCategoriesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMainCategoriesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
