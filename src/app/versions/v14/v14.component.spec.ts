import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V14Component } from './v14.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('V14Component', () => {
  let component: V14Component;
  let fixture: ComponentFixture<V14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V14Component],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(V14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
