import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyParentComponent } from './modify-parent.component';

describe('ModifyParentComponent', () => {
  let component: ModifyParentComponent;
  let fixture: ComponentFixture<ModifyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
