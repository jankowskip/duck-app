import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DucksListComponent } from './ducks-list.component';

describe('DucksListComponent', () => {
  let component: DucksListComponent;
  let fixture: ComponentFixture<DucksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DucksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DucksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
