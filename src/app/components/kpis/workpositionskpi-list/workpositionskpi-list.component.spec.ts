import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpositionskpiListComponent } from './workpositionskpi-list.component';

describe('WorkpositionskpiListComponent', () => {
  let component: WorkpositionskpiListComponent;
  let fixture: ComponentFixture<WorkpositionskpiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpositionskpiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpositionskpiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
