import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastContainerComponent } from './last-container.component';

describe('LastContainerComponent', () => {
  let component: LastContainerComponent;
  let fixture: ComponentFixture<LastContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
