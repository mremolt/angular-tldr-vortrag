import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookComponent } from './outlook.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('OutlookComponent', () => {
  let component: OutlookComponent;
  let fixture: ComponentFixture<OutlookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlookComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(OutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
