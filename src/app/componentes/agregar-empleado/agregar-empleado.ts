import { Component, inject,signal } from '@angular/core';
import { FormsModule, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './agregar-empleado.html',
  styleUrl: './agregar-empleado.css'
})

export class AgregarEmpleado {
  private crudService = inject(CrudService);
  private ruteador = inject(Router);
  form = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      correo: new FormControl(''),
    })
  );

  enviarDatos(): any {
    if (window.confirm('Desea agregar el registro?')) {
      console.log('Me presionaste');
      this.crudService.AgregarEmpleado(this.form().value).subscribe(() => {
        this.ruteador.navigateByUrl('/listar-empleado').then(() =>{
          window.location.reload();
        });
      });
    }
  }

}
