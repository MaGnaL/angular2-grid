import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2GridComponent } from './angular2-grid.component';

describe('Angular2GridComponent', () => {
  let component: Angular2GridComponent;
  let fixture: ComponentFixture<Angular2GridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2GridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
