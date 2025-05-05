import { TestBed } from '@angular/core/testing';

import { AllProductsDashboardService } from './all-products-dashboard.service';

describe('AllProductsDashboardService', () => {
  let service: AllProductsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
