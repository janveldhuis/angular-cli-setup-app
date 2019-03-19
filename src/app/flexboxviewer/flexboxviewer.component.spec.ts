import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxviewerComponent } from './flexboxviewer.component';
import {MaterialModule} from '../material/material.module';

describe('FlexboxviewerComponent', () => {
  let component: FlexboxviewerComponent;
  let fixture: ComponentFixture<FlexboxviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ FlexboxviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
