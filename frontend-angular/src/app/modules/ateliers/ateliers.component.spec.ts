import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteliersComponent } from './ateliers.component';

describe('AteliersComponent', () => {
  let component: AteliersComponent;
  let fixture: ComponentFixture<AteliersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AteliersComponent]
    });
    fixture = TestBed.createComponent(AteliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
