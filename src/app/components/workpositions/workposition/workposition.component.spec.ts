import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpositionComponent } from './workposition.component';

describe('WorkpositionComponent', () => {
  let component: WorkpositionComponent;
  let fixture: ComponentFixture<WorkpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
