import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado, Tipo } from '../../interfaces/empleado.interface';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listEmpleados: Empleado[] = [];

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'tipo'];
  dataSource!: MatTableDataSource<any>;
  //dataSource = new MatTableDataSource(this.listEmpleados);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.cargarEmpleado();
  }

  cargarEmpleado() {
    this.listEmpleados = this._empleadoService.getEmpleado();
    this.dataSource = new MatTableDataSource(this.listEmpleados);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    // Agregamos el siguiente código para filtrar por cédula
    const filterCedula = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data, filter) => {
      const cedula = data.cedula.trim().toLowerCase();
      return cedula.includes(filter);
    };
    this.dataSource.filter = filterCedula;
  }
}
