import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduserMainComponent } from './enduser-main.component';

describe('EnduserMainComponent', () => {
  let component: EnduserMainComponent;
  let fixture: ComponentFixture<EnduserMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduserMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
