import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentsComponent } from './admin-students.component';

describe('AdminStudentsComponent', () => {
  let component: AdminStudentsComponent;
  let fixture: ComponentFixture<AdminStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
