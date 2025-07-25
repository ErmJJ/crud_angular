import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './listar-empleado.html',
  styleUrl: './listar-empleado.css'
})
export class ListarEmpleado {
  Empleados: any;
  constructor(private crudService: CrudService) { }
  ngOnInit() {
    this.crudService.ObtenerEmpleados().subscribe((respuesta) => {
      console.log(respuesta);
      this.Empleados = respuesta;
    });
  }
  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm('Desea borrar el registro?')) {
      this.crudService.BorrarEmpleado(id).subscribe((respuesta) => {
        window.location.reload();
        this.Empleados.splice(iControl, 1);
        this.Empleados = respuesta;
      });
    }
  }
}
