import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestkpiComponent } from './testkpi.component';

describe('TestkpiComponent', () => {
  let component: TestkpiComponent;
  let fixture: ComponentFixture<TestkpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestkpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
