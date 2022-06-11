import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHighlightCardComponent } from './weather-highlight-card.component';

describe('WeatherHighlightCardComponent', () => {
  let component: WeatherHighlightCardComponent;
  let fixture: ComponentFixture<WeatherHighlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHighlightCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherHighlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
