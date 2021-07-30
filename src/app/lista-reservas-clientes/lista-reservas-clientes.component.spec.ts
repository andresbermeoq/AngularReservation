import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservasClientesComponent } from './lista-reservas-clientes.component';

describe('ListaReservasClientesComponent', () => {
  let component: ListaReservasClientesComponent;
  let fixture: ComponentFixture<ListaReservasClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReservasClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReservasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
