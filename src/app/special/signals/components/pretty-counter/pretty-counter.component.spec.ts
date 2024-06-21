import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyCounterComponent } from './pretty-counter.component';

describe('PrettyCounterComponent', () => {
  let component: PrettyCounterComponent;
  let fixture: ComponentFixture<PrettyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrettyCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrettyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
