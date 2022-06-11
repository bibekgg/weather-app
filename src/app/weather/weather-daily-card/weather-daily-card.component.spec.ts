import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDailyCardComponent } from './weather-daily-card.component';

describe('WeatherDailyCardComponent', () => {
  let component: WeatherDailyCardComponent;
  let fixture: ComponentFixture<WeatherDailyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDailyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherDailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
