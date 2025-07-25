import { Routes } from '@angular/router';
import { ListarEmpleado } from './componentes/listar-empleado/listar-empleado';
import { AgregarEmpleado } from './componentes/agregar-empleado/agregar-empleado';
import { EditarEmpleado } from './componentes/editar-empleado/editar-empleado';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listar-empleado',
        pathMatch: 'full'
    },
    {
        path: 'listar-empleado',
        component: ListarEmpleado
    },
    {
        path: 'agregar-empleado',
        component: AgregarEmpleado
    },
    {
        path: 'editar-empleado/:id',
        component: EditarEmpleado
    }
];
