import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizListComponent } from './matriz-list.component';

describe('MatrizListComponent', () => {
  let component: MatrizListComponent;
  let fixture: ComponentFixture<MatrizListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
