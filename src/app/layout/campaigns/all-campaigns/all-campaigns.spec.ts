import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampaigns } from './all-campaigns';

describe('AllCampaigns', () => {
  let component: AllCampaigns;
  let fixture: ComponentFixture<AllCampaigns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCampaigns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCampaigns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
