import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Empleado, Tipo } from '../../interfaces/empleado.interface';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  form: FormGroup;

  tipos = [
    {
      id: 'Medico',
      desc: 'Medico',
    },
    {
      id: 'Guardia',
      desc: 'Guardia',
    },
    {
      id: 'Enfermera',
      desc: 'Enfermera',
    },
    {
      id: 'Aseo',
      desc: 'Aseo',
    },
  ];

  ngOnInit() {}

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _empleadoService: EmpleadoService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      // tipo: ['', Validators.required],
    });
  }

  agregarEmpleado() {
    const user: Empleado = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      tipo: this.form.value.tipo,
    };

    this._empleadoService.agregarEmpleado(user);
    this.router.navigate(['/empleado/listado']);

    this._snackBar.open('El Empleado ha sido agregado con éxito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  volver() {
    this.router.navigate(['/empleado/listado']);
  }
}
