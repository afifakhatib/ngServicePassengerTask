import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDashBoardComponent } from './passenger-dash-board.component';

describe('PassengerDashBoardComponent', () => {
  let component: PassengerDashBoardComponent;
  let fixture: ComponentFixture<PassengerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
