import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcargosComponent } from './testcargos.component';

describe('TestcargosComponent', () => {
  let component: TestcargosComponent;
  let fixture: ComponentFixture<TestcargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
