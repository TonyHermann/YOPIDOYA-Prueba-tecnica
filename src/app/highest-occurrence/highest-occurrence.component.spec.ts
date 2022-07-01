import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestOccurrenceComponent } from './highest-occurrence.component';

describe('HighestOccurrenceComponent', () => {
  let component: HighestOccurrenceComponent;
  let fixture: ComponentFixture<HighestOccurrenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestOccurrenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
