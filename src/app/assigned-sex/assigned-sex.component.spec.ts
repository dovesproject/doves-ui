import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSexComponent } from './assigned-sex.component';

describe('AssignedSexComponent', () => {
  let component: AssignedSexComponent;
  let fixture: ComponentFixture<AssignedSexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedSexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
