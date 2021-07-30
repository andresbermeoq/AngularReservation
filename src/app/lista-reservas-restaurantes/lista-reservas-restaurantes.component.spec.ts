import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservasRestaurantesComponent } from './lista-reservas-restaurantes.component';

describe('ListaReservasRestaurantesComponent', () => {
  let component: ListaReservasRestaurantesComponent;
  let fixture: ComponentFixture<ListaReservasRestaurantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaReservasRestaurantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaReservasRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
