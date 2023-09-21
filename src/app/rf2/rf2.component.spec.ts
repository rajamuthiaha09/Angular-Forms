import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rf2Component } from './rf2.component';

describe('Rf2Component', () => {
  let component: Rf2Component;
  let fixture: ComponentFixture<Rf2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rf2Component]
    });
    fixture = TestBed.createComponent(Rf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
