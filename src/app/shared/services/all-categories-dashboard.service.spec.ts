import { TestBed } from '@angular/core/testing';

import { AllCategoriesDashboardService } from './all-categories-dashboard.service';

describe('AllCategoriesDashboardService', () => {
  let service: AllCategoriesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCategoriesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
