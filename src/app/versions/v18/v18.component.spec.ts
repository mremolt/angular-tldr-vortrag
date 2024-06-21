import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V18Component } from './v18.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('V18Component', () => {
  let component: V18Component;
  let fixture: ComponentFixture<V18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V18Component],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(V18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
