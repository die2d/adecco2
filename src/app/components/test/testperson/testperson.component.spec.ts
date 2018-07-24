import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpersonComponent } from './testperson.component';

describe('TestpersonComponent', () => {
  let component: TestpersonComponent;
  let fixture: ComponentFixture<TestpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
