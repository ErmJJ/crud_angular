import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmpleado } from './listar-empleado';

describe('ListarEmpleado', () => {
  let component: ListarEmpleado;
  let fixture: ComponentFixture<ListarEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarEmpleado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
