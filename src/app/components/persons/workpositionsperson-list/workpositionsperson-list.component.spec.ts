import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkpositionspersonListComponent } from './workpositionsperson-list.component';

describe('WorkpositionspersonListComponent', () => {
  let component: WorkpositionspersonListComponent;
  let fixture: ComponentFixture<WorkpositionspersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpositionspersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkpositionspersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
