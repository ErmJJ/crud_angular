import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './editar-empleado.html',
  styleUrl: './editar-empleado.css'
})
export class EditarEmpleado {
  private crudService = inject(CrudService)
  private ruteador = inject(Router);
  form = signal<FormGroup>(
    new FormGroup(
      {
        nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
        correo: new FormControl(''),
      }
    )
  );

  enviarDatos(): any {
    if (window.confirm('Desea actualizar el registro?')) {
      this.crudService.ActualizarEmpleado(this.elID, this.form().value).subscribe(() => {
        this.ruteador.navigateByUrl('/listar-empleado');
      });
    }
  };

  elID: any;
  constructor(private activeRoute: ActivatedRoute) {
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
  };

  ngOnInit() {
    this.crudService.ObtenerEmpleados().subscribe((respuesta: any) => {
      const empleado = respuesta.find((e: any) => e.id === this.elID);
      this.form().patchValue({
        nombre: empleado.nombre,
        correo: empleado.correo
      });
    });
  }

}
