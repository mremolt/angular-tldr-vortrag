import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V16Component } from './v16.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

describe('V16Component', () => {
  let component: V16Component;
  let fixture: ComponentFixture<V16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V16Component],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(V16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
