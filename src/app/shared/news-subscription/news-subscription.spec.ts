import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSubscription } from './news-subscription';

describe('NewsSubscription', () => {
  let component: NewsSubscription;
  let fixture: ComponentFixture<NewsSubscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSubscription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSubscription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
