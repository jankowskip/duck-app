import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDuckComponent } from './add-duck.component';

describe('AddDuckComponent', () => {
  let component: AddDuckComponent;
  let fixture: ComponentFixture<AddDuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
