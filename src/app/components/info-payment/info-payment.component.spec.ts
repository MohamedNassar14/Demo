import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPaymentComponent } from './info-payment.component';

describe('InfoPaymentComponent', () => {
  let component: InfoPaymentComponent;
  let fixture: ComponentFixture<InfoPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
