import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Empleado } from "./empleado";

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = '/empleados';  // Ruta relativa (sin "http://localhost")
  constructor(private clientHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clientHttp.post(this.API + '?insertar=1', datosEmpleado);
  }
  ObtenerEmpleados() {
    return this.clientHttp.get(this.API);
  }
  BorrarEmpleado(id: any): Observable<any> {
    return this.clientHttp.get(this.API + '?borrar=' + id);
  }
  ActualizarEmpleado(id: any, datosEmpleado: Empleado): Observable<any> {
    return this.clientHttp.post(this.API + '?actualizar=' + id, datosEmpleado);
  }
}