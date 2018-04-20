import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesListComponent } from './competencies-list.component';

describe('CompetenciesListComponent', () => {
  let component: CompetenciesListComponent;
  let fixture: ComponentFixture<CompetenciesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
