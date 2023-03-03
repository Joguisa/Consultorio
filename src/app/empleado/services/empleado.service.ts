import { Injectable } from '@angular/core';
import { Empleado, Tipo } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleados: Empleado[] = [
    {
      cedula: '0941262024',
      nombre: 'Jonatán',
      apellido: 'Guillén',
      tipo: Tipo.Medico,
    },
    {
      cedula: '0957391630',
      nombre: 'Josué',
      apellido: 'Salabarria',
      tipo: Tipo.Guardia,
    },
    {
      cedula: '0994061728',
      nombre: 'Marlon',
      apellido: 'Chacón',
      tipo: Tipo.Aseo,
    },
    {
      cedula: '0981725368',
      nombre: 'José',
      apellido: 'Quimi',
      tipo: Tipo.Guardia,
    },
    {
      cedula: '0990037721',
      nombre: 'Jeremy',
      apellido: 'Salvatierra',
      tipo: Tipo.Medico,
    },
    {
      cedula: '0965387612',
      nombre: 'Daniela',
      apellido: 'Nazareno',
      tipo: Tipo.Aseo,
    },
    {
      cedula: '0977223388',
      nombre: 'Nahomi',
      apellido: 'Holguin',
      tipo: Tipo.Enfermera,
    },
    {
      cedula: '0999911187',
      nombre: 'Mariuxi',
      apellido: 'Tenorio',
      tipo: Tipo.Enfermera,
    },
  ];

  constructor() {}

  getEmpleado() {
    return this.listEmpleados.slice();
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleados.unshift(empleado);
  }
}
