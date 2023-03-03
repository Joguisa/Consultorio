import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { MaterialModule } from '../material/material.module';
import { EmpleadoTarjetaComponent } from './components/empleado-tarjeta/empleado-tarjeta.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    EmpleadoComponent,
    HomeComponent,
    ListadoComponent,
    EmpleadoTarjetaComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    EmpleadoRoutingModule,
    MaterialModule,
  ],
})
export class EmpleadoModule {}
