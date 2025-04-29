import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDetailsStudentComponent } from './see-details-student.component';

describe('SeeDetailsStudentComponent', () => {
  let component: SeeDetailsStudentComponent;
  let fixture: ComponentFixture<SeeDetailsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeDetailsStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeDetailsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
