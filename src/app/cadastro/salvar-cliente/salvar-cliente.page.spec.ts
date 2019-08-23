import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarClientePage } from './salvar-cliente.page';

describe('SalvarClientePage', () => {
  let component: SalvarClientePage;
  let fixture: ComponentFixture<SalvarClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
