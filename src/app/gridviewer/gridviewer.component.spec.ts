import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewerComponent } from './gridviewer.component';
import {MaterialModule} from '../material/material.module';

describe('GridviewerComponent', () => {
  let component: GridviewerComponent;
  let fixture: ComponentFixture<GridviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ GridviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
