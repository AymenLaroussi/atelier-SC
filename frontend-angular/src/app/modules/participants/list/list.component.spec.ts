import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantsComponent } from './listParticipants.component';

describe('ListComponent', () => {
  let component: ListParticipantsComponent;
  let fixture: ComponentFixture<ListParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParticipantsComponent]
    });
    fixture = TestBed.createComponent(ListParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
