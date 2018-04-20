import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpositionsComponent } from './workpositions.component';

describe('WorkpositionsComponent', () => {
  let component: WorkpositionsComponent;
  let fixture: ComponentFixture<WorkpositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
