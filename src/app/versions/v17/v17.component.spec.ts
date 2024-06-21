import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V17Component } from './v17.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('V17Component', () => {
  let component: V17Component;
  let fixture: ComponentFixture<V17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V17Component],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(V17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
