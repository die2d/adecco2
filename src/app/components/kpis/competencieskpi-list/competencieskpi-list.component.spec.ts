import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencieskpiListComponent } from './competencieskpi-list.component';

describe('CompetencieskpiListComponent', () => {
  let component: CompetencieskpiListComponent;
  let fixture: ComponentFixture<CompetencieskpiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencieskpiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencieskpiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
