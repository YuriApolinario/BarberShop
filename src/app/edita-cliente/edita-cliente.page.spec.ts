import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaClientePage } from './edita-cliente.page';

describe('EditaClientePage', () => {
  let component: EditaClientePage;
  let fixture: ComponentFixture<EditaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
