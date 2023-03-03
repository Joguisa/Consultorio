export interface Empleado {
  cedula: string;
  nombre: string;
  apellido: string;
  tipo: Tipo;
}

export enum Tipo {
  Medico = 'Medico',
  Guardia = 'Guardia',
  Enfermera = 'Enfemera',
  Aseo = 'Aseo',
}
