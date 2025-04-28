import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDetailsParentComponent } from './see-details-parent.component';

describe('SeeDetailsParentComponent', () => {
  let component: SeeDetailsParentComponent;
  let fixture: ComponentFixture<SeeDetailsParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeDetailsParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeDetailsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
