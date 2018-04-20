import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpositionsListComponent } from './workpositions-list.component';

describe('WorkpositionsListComponent', () => {
  let component: WorkpositionsListComponent;
  let fixture: ComponentFixture<WorkpositionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpositionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpositionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
