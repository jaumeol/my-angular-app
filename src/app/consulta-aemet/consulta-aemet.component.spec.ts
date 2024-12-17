import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAemetComponent } from './consulta-aemet.component';

describe('ConsultaAemetComponent', () => {
  let component: ConsultaAemetComponent;
  let fixture: ComponentFixture<ConsultaAemetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaAemetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
