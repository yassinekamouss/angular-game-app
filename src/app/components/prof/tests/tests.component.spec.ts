import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsComponent } from './tests.component';

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
